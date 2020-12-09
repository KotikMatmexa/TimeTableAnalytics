package com.spbu.timetable.analysis.controller;

import com.spbu.timetable.analysis.dto.ContingentUnitDto;
import com.spbu.timetable.analysis.dto.DivisionDto;
import com.spbu.timetable.analysis.service.DivisionService;
import com.spbu.timetable.analysis.utils.CommonConsts;
import com.spbu.timetable.analysis.utils.DtoMapper;
import com.spbu.timetable.analysis.utils.RequestInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(RequestInfo.DIVISIONS)
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class DivisionController {
    private final DivisionService divisionService;

    @GetMapping()
    public List<DivisionDto> getAllDivisions() {
        return DtoMapper.convertList(divisionService.getAll(), DivisionDto.class);
    }


    @GetMapping(RequestInfo.DIVISION_ID)
    public List<ContingentUnitDto> getGroupsByDivisionAndStudyYear(@PathVariable String divisionId,
                                                                   @RequestParam(defaultValue = CommonConsts.CURRENT_STUDY_YEAR) String studyYear) {
        return DtoMapper.convertList(
                divisionService.getAllGroupsByDivisionAndStudyYear(divisionId, studyYear), ContingentUnitDto.class);

    }
}
