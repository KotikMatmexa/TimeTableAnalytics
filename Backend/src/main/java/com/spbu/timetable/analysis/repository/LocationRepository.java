package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface LocationRepository extends JpaRepository<Location, UUID> {
    Optional<Location> findByIntId(int id);
}
