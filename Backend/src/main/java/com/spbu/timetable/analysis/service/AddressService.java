package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.dto.AddressDtoShort;
import com.spbu.timetable.analysis.dto.AddressWithLocationEventDto;
import com.spbu.timetable.analysis.dto.ListForDto;
import com.spbu.timetable.analysis.dto.LocationWithEventsDto;
import com.spbu.timetable.analysis.model.Address;
import com.spbu.timetable.analysis.repository.AddressRepository;
import com.spbu.timetable.analysis.utils.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AddressService {

    private final AddressRepository addressRepository;

    private final LocationService locationService;

    public Address getById(String id) {
        Address address = addressRepository.findByOid(id)
                .orElse(null);
        return address;//.orElseThrow(()->new Exception("Entity not found"));
    }

    public List<Address> findAll(int offset, int limit) {
        Pageable pageable = PageRequest.of(offset / limit, limit);
        List<Address> allByGCRecordIsNotNull = addressRepository.findAllByGCRecordIsNotNull(pageable);
        return allByGCRecordIsNotNull;
    }

    public ListForDto<AddressWithLocationEventDto> findAllEventsForAddress(List<String> addressIds, String start, String end) {
        LocalDateTime from = parseDateTime(start);
        LocalDateTime to = parseDateTime(end);

        List<AddressWithLocationEventDto> addressWithLocationEventDtos = addressIds
                .stream()
                .map(addressId -> buildAddressDtoWithLocationAndEvent(addressId, from, to))
                .collect(Collectors.toList());

        return new ListForDto<>(addressWithLocationEventDtos.size(), addressWithLocationEventDtos);
    }

    private AddressWithLocationEventDto buildAddressDtoWithLocationAndEvent(String addressId, LocalDateTime start, LocalDateTime end) {
        Address address = getById(addressId);
        AddressDtoShort addressDtoShort = DtoMapper.convertToClass(address, AddressDtoShort.class);

        ListForDto<LocationWithEventsDto> allEventsForLocationsInAddress = locationService
                .getAllEventsForLocationsInAddress(addressId, start, end);

        return AddressWithLocationEventDto
                .builder()
                .address(addressDtoShort)
                .locationWithEventsDto(allEventsForLocationsInAddress)
                .build();

    }

    public static LocalDateTime parseDateTime(String dateTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        return LocalDateTime.parse(dateTime, formatter);
    }
}
