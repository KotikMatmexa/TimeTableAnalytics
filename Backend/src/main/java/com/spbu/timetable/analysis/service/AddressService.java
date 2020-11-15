package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.model.Address;
import com.spbu.timetable.analysis.repository.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AddressService {

    private final AddressRepository addressRepository;

    public Address getById(String id) {
        Address address = addressRepository.findByOid(id)
                .orElse(null);
        return address;//.orElseThrow(()->new Exception("Entity not found"));
    }

    public List<Address> findAll(int offset, int limit) {
        Pageable pageable = PageRequest.of(offset / limit, limit);
        List<Address> allByGCRecordIsNotNull = addressRepository.findAllByGCRecordIsNotNull(pageable);
        return allByGCRecordIsNotNull;
    }

}
