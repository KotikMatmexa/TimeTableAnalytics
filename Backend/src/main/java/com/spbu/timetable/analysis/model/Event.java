package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "event")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Event {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    private LocalDateTime start;

    @Column(name = "enddate")
    private LocalDateTime endDate;

    @Column(name = "gcrecord")
    private String GCRecord;

    //private EducatorAssignment educatorAssignment;
    private String subject;

    @Column(name = "locationsdisplaytext")
    private String locationsDisplayText;

    @Column(name = "educatorsdisplaytext")
    private String educatorsDisplayText;

    @Column(name = "internaldescription")
    private String internalDescription;

    // private TermKind termKind;
    // private Kind Kind;
    // private StudyEventsTimeTableKind studyEventsTimeTableKind;

    @Column(name = "subjectenglish")
    private String subjectEnglish;

    @Column(name = "locationsdisplaytextenglish")
    private String locationsDisplayTextEnglish;

    @Column(name = "educatorsdisplaytextenglish")
    private String educatorsDisplayTextEnglish;

    @Column(name = "educatorsshortdisplaytext")
    private String educatorsShortDisplayText;

    @Column(name = "educatorsshortdisplaytextenglish")
    private String educatorsShortDisplayTextEnglish;

    //private  TimeTable timeTable;

    @Column(name = "descriptionshort")
    private String descriptionShort;

    @Column(name = "descriptionlong")
    private String descriptionLong;

    //private AttendanceKind attendanceKind;

    //private Trajectory trajectory;

    @OneToMany(mappedBy = "event", fetch = FetchType.LAZY)
    private List<EventLocation> eventLocation;

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(
            name = "contingentunit",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private ContingentUnit contingentUnit;

}
