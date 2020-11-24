package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.Address;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface AddressRepository extends JpaRepository<Address, UUID> {

    Optional<Address> findByOid(String id);

    @Query("SELECT adr FROM Address adr " +
            " WHERE adr.buildingName LIKE CONCAT('%',:search,'%') " +
            " or adr.street LIKE CONCAT('%',:search,'%')" +
            " and adr.GCRecord = null")
    Page<Address> findAllByGCRecordIsNotNullAndStreetLike(Pageable pageable, String search);

}
