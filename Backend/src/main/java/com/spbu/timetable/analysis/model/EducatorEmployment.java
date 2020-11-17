package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "educatoremployment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class EducatorEmployment {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    @Column(name = "displayname")
    private String displayName;

    @Column(name = "shortdisplayname")
    private String shortDisplayName;

    @Column(name = "displaynameenglish")
    private String displayNameEnglish;

    @Column(name = "shortdisplaynameenglish")
    private String shortDisplayNameEnglish;

    @Column(name = "gcrecord")
    private String GCRecord;

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(
            name = "position",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private Position position;


//            ,[Position]
//
//            ,[SapDepartment]
//            ,[SapDivision]
//             [EducatorMasterPerson]


}
