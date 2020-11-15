package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.Address;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface AddressRepository extends JpaRepository<Address, UUID> {

    Optional<Address> findByOid(String id);

    List<Address> findAllByGCRecordIsNotNull(Pageable pageable);

}
