package com.spbu.timetable.analysis.controller;

import com.spbu.timetable.analysis.model.Location;
import com.spbu.timetable.analysis.service.LocationService;
import com.spbu.timetable.analysis.utils.RequestInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(RequestInfo.LOCATION)
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LocationController {

    private final LocationService locationService;

    @GetMapping(RequestInfo.ID)
    public Location getById(@PathVariable int id){
        return locationService.getById(id);
    }
}
