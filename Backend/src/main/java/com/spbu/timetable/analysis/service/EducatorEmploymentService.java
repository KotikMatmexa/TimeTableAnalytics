package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.dto.EducatorsDto;
import com.spbu.timetable.analysis.dto.ListForDto;
import com.spbu.timetable.analysis.model.EducatorEmployment;
import com.spbu.timetable.analysis.repository.EducatorEmploymentRepository;
import com.spbu.timetable.analysis.utils.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EducatorEmploymentService {

    private final EducatorEmploymentRepository educatorEmploymentRepository;

    public ListForDto<EducatorsDto> getAllEducatorsByAddress(int offset, int limit, String addressId){
        Pageable pageable = PageRequest.of(offset / limit, limit);
        Page<EducatorEmployment> allEducatorsByAddress = educatorEmploymentRepository
                .findAllEducatorsByAddress(addressId, pageable);
        List<EducatorsDto> educatorsDtos = DtoMapper.convertList(allEducatorsByAddress.getContent(), EducatorsDto.class);
        return new ListForDto<>(allEducatorsByAddress.getTotalElements(), educatorsDtos);
    }
}
