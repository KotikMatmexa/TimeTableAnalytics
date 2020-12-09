package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.model.ContingentUnit;
import com.spbu.timetable.analysis.model.Division;
import com.spbu.timetable.analysis.model.DivisionsUnits;
import com.spbu.timetable.analysis.repository.DivisionRepository;
import com.spbu.timetable.analysis.repository.DivisionUnitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class DivisionService {
    private final DivisionRepository divisionRepository;
    private final DivisionUnitRepository divisionUnitRepository;

    public List<Division> getAll(){
        List<Division> collect = divisionRepository.findAllSpecificFields()
                .stream()
                .map(object -> Division.builder()
                        .oid(object[0].toString())
                        .name(object[1].toString()).build())
                .collect(Collectors.toList());

        return collect;
    }

    public List<ContingentUnit> getAllGroupsByDivisionAndStudyYear(String divisionId, String yearId){
        //return divisionRepository.findAll(divisionId, yearId);
        List<ContingentUnit> allBy = divisionUnitRepository.findAllByDivisionOidAndContingentUnitCurrentStudyYearOid(divisionId, yearId);
        return allBy;
    }
}
