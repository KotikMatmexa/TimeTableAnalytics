package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "educatoremploymentposition")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Position {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    @Column(name = "shortname")
    private String shortName;

    @Column(name = "nameenglish")
    private String nameEnglish;

    @OneToMany(mappedBy = "position", fetch = FetchType.LAZY)
    List<EducatorEmployment> educatorEmployments;

}
