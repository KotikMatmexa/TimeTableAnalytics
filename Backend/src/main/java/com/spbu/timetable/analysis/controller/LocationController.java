package com.spbu.timetable.analysis.controller;

import com.spbu.timetable.analysis.dto.ListForDto;
import com.spbu.timetable.analysis.dto.LocationWithEventsDto;
import com.spbu.timetable.analysis.service.LocationService;
import com.spbu.timetable.analysis.utils.RequestInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(RequestInfo.LOCATION)
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LocationController {

    private final LocationService locationService;

    @GetMapping(RequestInfo.TIMETABLE)
    public ListForDto<LocationWithEventsDto> findAllEventsForLocations(@RequestBody List<String> addressIds, @RequestParam(required = false) String start, @RequestParam(required = false) String end) {
        return locationService.findAllEventsForLocations(addressIds, start, end);
    }
}
