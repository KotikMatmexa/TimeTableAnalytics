package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.dto.EventLocationDto;
import com.spbu.timetable.analysis.dto.ListForDto;
import com.spbu.timetable.analysis.dto.LocationDtoShort;
import com.spbu.timetable.analysis.dto.LocationWithEventsDto;
import com.spbu.timetable.analysis.model.Event;
import com.spbu.timetable.analysis.model.Location;
import com.spbu.timetable.analysis.repository.LocationRepository;
import com.spbu.timetable.analysis.utils.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LocationService {
    private final LocationRepository locationRepository;

    private final EventService eventService;

    public Location getById(String id) {
        return locationRepository.findById(id).orElse(null);
    }

    private LocationWithEventsDto getWithEventBetweenDates(String id, LocalDateTime start, LocalDateTime end) {
        LocationDtoShort location = DtoMapper.convertToClass(getById(id), LocationDtoShort.class);

        List<Event> eventByLocationIdBetweenDates = eventService.getEventByLocationIdBetweenDates(id, start, end);

        if (eventByLocationIdBetweenDates.isEmpty()) {
            return null;
        }

        List<EventLocationDto> eventLocationDtos = DtoMapper.convertList(eventByLocationIdBetweenDates, EventLocationDto.class);

        return LocationWithEventsDto.builder()
                .location(location)
                .events(new ListForDto<>(eventLocationDtos.size(), eventLocationDtos))
                .build();
    }

    public ListForDto<LocationWithEventsDto> getAllEventsForLocationsInAddress(String addressId, LocalDateTime start, LocalDateTime end) {
        List<String> allLocationByAddressId = getAllLocationByAddressId(addressId);
        return findAllEventsForLocations(allLocationByAddressId, start, end);
    }

    private List<String> getAllLocationByAddressId(String addressId) {
        return locationRepository.findAllByAddressOid(addressId)
                .stream()
                .map(Location::getOid)
                .collect(Collectors.toList());
    }

    private ListForDto<LocationWithEventsDto> findAllEventsForLocations(List<String> locationIds, LocalDateTime start, LocalDateTime end) {
        List<LocationWithEventsDto> locationWithEventsDtos = locationIds
                .stream()
                .map(id -> getWithEventBetweenDates(id, start, end))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
        return new ListForDto<>(locationWithEventsDtos.size(), locationWithEventsDtos);
    }

}
