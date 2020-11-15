package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {
    List<Location> findAllByAddressOidAndEventLocationBetween(String oid, LocalDateTime start, LocalDateTime end);
}
