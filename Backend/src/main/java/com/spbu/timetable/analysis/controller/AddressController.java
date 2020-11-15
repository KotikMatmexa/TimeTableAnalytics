package com.spbu.timetable.analysis.controller;

import com.spbu.timetable.analysis.dto.AddressFullDto;
import com.spbu.timetable.analysis.model.Address;
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

    @GetMapping()
    public List<Address> findAll(@RequestParam(defaultValue = RequestInfo.DEFAULT_OFFSET) int offset,
                                 @RequestParam(defaultValue = RequestInfo.DEFAULT_LIMIT) int limit) {
        return addressService.findAll(offset, limit);
    }


}
