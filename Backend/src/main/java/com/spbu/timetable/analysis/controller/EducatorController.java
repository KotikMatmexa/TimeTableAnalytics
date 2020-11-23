package com.spbu.timetable.analysis.controller;

import com.spbu.timetable.analysis.dto.EducatorsWithEventsDto;
import com.spbu.timetable.analysis.service.EducatorEmploymentService;
import com.spbu.timetable.analysis.utils.RequestInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(RequestInfo.EDUCATORS)
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EducatorController {

    private final EducatorEmploymentService educatorEmploymentService;

    @GetMapping(RequestInfo.EVENTS + RequestInfo.EDUCATOR_ID)
    public EducatorsWithEventsDto findAllEventsForEducator(@PathVariable String educatorId,
                                                           @RequestParam String start,
                                                           @RequestParam String end) {
        return educatorEmploymentService.getAllEducatorsEvents(educatorId, start, end);
    }

}
