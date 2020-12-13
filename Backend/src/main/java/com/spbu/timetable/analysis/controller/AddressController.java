package com.spbu.timetable.analysis.controller;

import com.spbu.timetable.analysis.dto.*;
import com.spbu.timetable.analysis.service.AddressService;
import com.spbu.timetable.analysis.utils.DtoMapper;
import com.spbu.timetable.analysis.utils.RequestInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RequestMapping(RequestInfo.ADDRESS)
public class AddressController {

    private final AddressService addressService;

    @GetMapping(RequestInfo.ID)
    public AddressFullDto getById(@PathVariable String id) {
        AddressFullDto addressFullDto = DtoMapper.convertToClass(addressService.getById(id), AddressFullDto.class);
        return addressFullDto;
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ListForDto<AddressIdDto> searchByStreet(@RequestParam(defaultValue = RequestInfo.DEFAULT_OFFSET) int offset,
                                             @RequestParam(defaultValue = RequestInfo.DEFAULT_LIMIT) int limit,
                                             @RequestParam(defaultValue = RequestInfo.DEFAULT_SEARCH_VALUE) String searchText) {
        return addressService.findAll(offset, limit, searchText);
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(RequestInfo.TIMETABLE)
    public ListForDto<AddressWithLocationEventDto> findAllEventsForLocations(@RequestBody List<String> addressIds,
                                                                             @RequestParam(required = false) String start,
                                                                             @RequestParam(required = false) String end) {
        return addressService.findAllEventsForAddress(addressIds, start, end);
    }

    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(RequestInfo.EDUCATORS+ RequestInfo.ADDRESS_ID )
    public ListForDto<EducatorsDto> getAllEducatorsByAddress(@RequestParam(defaultValue = RequestInfo.DEFAULT_OFFSET) int offset,
                                                             @RequestParam(defaultValue = RequestInfo.DEFAULT_LIMIT) int limit,
                                                             @PathVariable String addressId){
        return addressService.getAllEducatorsByAddress(offset, limit, addressId);
    }

}
