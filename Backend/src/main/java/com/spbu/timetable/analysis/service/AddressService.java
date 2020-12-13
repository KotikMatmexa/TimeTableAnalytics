package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.dto.*;
import com.spbu.timetable.analysis.model.Address;
import com.spbu.timetable.analysis.repository.AddressRepository;
import com.spbu.timetable.analysis.utils.DateTimeFormatter;
import com.spbu.timetable.analysis.utils.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AddressService {

    private final AddressRepository addressRepository;

    private final LocationService locationService;

    private final EducatorEmploymentService educatorEmploymentService;

    public Address getById(String id) {
        Address address = addressRepository.findByOid(id)
                .orElse(null);
        return address;//.orElseThrow(()->new Exception("Entity not found"));
    }

    public ListForDto<AddressIdDto> findAll(int offset, int limit, String searchText) {
        Pageable pageable = PageRequest.of(offset / limit, limit);
        Page<Address> allByGCRecordIsNotNull = addressRepository.findAllByGCRecordIsNotNullAndStreetLike(pageable, searchText);
        List<AddressIdDto> addressIdDtos = DtoMapper.convertList(allByGCRecordIsNotNull.getContent(), AddressIdDto.class);
        return new ListForDto<>(allByGCRecordIsNotNull.getTotalElements(), addressIdDtos);
    }

    public ListForDto<AddressWithLocationEventDto> findAllEventsForAddress(List<String> addressIds, String start, String end) {
        LocalDateTime from = DateTimeFormatter.parseDateTime(start);
        LocalDateTime to = DateTimeFormatter.parseDateTime(end);

        List<AddressWithLocationEventDto> addressWithLocationEventDtos = addressIds
                .stream()
                .map(addressId -> buildAddressDtoWithLocationAndEvent(addressId, from, to))
                .collect(Collectors.toList());

        return new ListForDto<>(addressWithLocationEventDtos.size(), addressWithLocationEventDtos);
    }

    public ListForDto<EducatorsDto> getAllEducatorsByAddress(int offset, int limit, String addressId) {
        return educatorEmploymentService.getAllEducatorsByAddress(offset, limit, addressId);
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
}
