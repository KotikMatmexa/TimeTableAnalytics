package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {
    @Query("SELECT loc FROM Location loc join Address adr on loc.address.oid = adr.oid" +
            " join Floor fl on loc.floor.oid = fl.oid" +
            " WHERE adr.oid= ?1 " +
            "and adr.GCRecord = null and loc.GCRecord = null")
    List<Location> findAllByAddressOid(String addressId);
}
