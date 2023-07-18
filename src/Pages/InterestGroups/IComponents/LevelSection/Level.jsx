import { useEffect } from "react"
import SheetAPI from "../../../../Utils/SheetAPI"
import { useState } from "react"
import CardSection from "../ListCards/CardSection"
import InfoTab from "../InfoTab/InfoTab"
import styles from "../../InterestGroup.module.css"
import { courseStructure } from "../Info"
import groupCourses from "../../Utils/groupCourses"


const LevelSection = ({ level, sheet_link }) => {
    const index = level === 'Beginner' ? 0 : level === 'Intermediate' ? 1 : level === 'Advanced' ? 2 : ''
    const [courses, setCourses] = useState([])
    const [groupedCourses, setGroupedCourses] = useState([])
    useEffect(() => {
        if (sheet_link && level && !courses.length)
            SheetAPI(sheet_link, level, setCourses)
        else if (courses.length && !groupedCourses.length)
            groupCourses(courses, setGroupedCourses)
    }, [sheet_link, level, courses, groupedCourses.length])
    return (
        <>
            <CardSection
                title={`${level} Courses`}
                description={courseStructure[index].desc}
                on
            />
            <div className={styles.second_view_container}>
                {Object.entries(groupedCourses).map(([key, value], index) => (
                    <div key={index}>
                        <InfoTab key={index} courses={value} title={key} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default LevelSection

