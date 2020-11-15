package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.model.Location;
import com.spbu.timetable.analysis.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LocationService {
    private final LocationRepository locationRepository;

    public Location getById(int id){
        Location location = locationRepository.findByIntId(id).orElse(null);
        return location;
    }
}
