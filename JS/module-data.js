/**
 * Returns an object with the id, title and year for a given academic year.
 * 
 * @param {Number} yearCount - The academic year (1-5).
 * @returns {Object|null} An object with 'id', 'title' and 'year' properties, or null if yearCount is invalid.
 */
export function getYearData(yearCount) {
    const yearData = [
        { id: 'first', title: 'First Academic Year', year: 1 },
        { id: 'second', title: 'Second Academic Year', year: 2 },
        { id: 'third', title: 'Third Academic Year', year: 3 },
        { id: 'fourth', title: 'Fourth Academic Year', year: 4 },
        { id: 'fifth', title: 'Fifth Academic Year', year: 5 },
    ];
  
    return yearData[yearCount - 1] || null;
};

export const courses = [
    { courseId: 'BCom', duration: 4, code: 1 },
    { courseId: 'HC', duration: 1, code: 2 },
    { courseId: 'Diploma', duration: 2, code: 3 },
    { courseId: 'BIT', duration: 3, code: 4 }
];

export const modules = [
    // First Year BCom
    {moduleName: 'Academic Writing 181', code: 'ACW181', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Academic-Writing-181-ACW181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Computer Architecture 181', code: 'COA181', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Computer-Architecture-181-COA181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Database Development 181', code: 'DBD181', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Database-Development-181-DBD181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Information Systems 181', code: 'INF181', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Information-Systems-181-INF181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Innovation and Leadership 101', code: 'INL101', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-101-INL101.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Innovation and Leadership 102', code: 'INL102', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-102-INL102.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Linear Programming 181', code: 'LPR181', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Linear-Programming-181-LPR181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Mathematics 181', code: 'MAT181', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Mathematics-181-MAT181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Networking Development 181', code: 'NWD181', lecturer: 'Prof. Lee', venue: 'Room 105', studyGuide: 'StudyGuides/Networking-Development-181-NWD181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Programming 181', code: 'PRG181', lecturer: 'Prof. Anderson', venue: 'Room 106', studyGuide: 'StudyGuides/Programming-181-PRG181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Programming 182', code: 'PRG182', lecturer: 'Prof. Anderson', venue: 'Room 106', studyGuide: 'StudyGuides/Programming-182-PRG182.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Statistics 181', code: 'STA181', lecturer: 'Dr. Martinez', venue: 'Room 107', studyGuide: 'StudyGuides/Statistics-181-STA181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Web Programming 181', code: 'WPR181', lecturer: 'Prof. Lee', venue: 'Room 108', studyGuide: 'StudyGuides/Web-Programming-181-WPR181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Business Management 181', code: 'BUM181', lecturer: 'Prof. Lee', venue: 'Room 109', studyGuide: 'StudyGuides/Business-Management-181-BUM181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    {moduleName: 'Entrepreneurship 181', code: 'ENT181', lecturer: 'Prof. Davis', venue: 'Room 110', studyGuide: 'StudyGuides/Entrepreneurship-181-ENT181.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BCom'},
    
    // Second Year BCom
    {moduleName: 'Database Development 281', code: 'DBD281', lecturer: 'Dr. Brown', venue: 'Room 201', studyGuide: 'StudyGuides/Database-Development-281-DBD281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Information Systems 281', code: 'INF281', lecturer: 'Dr. Brown', venue: 'Room 202', studyGuide: 'StudyGuides/Information-Systems-281-INF281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Innovation and Leadership 201', code: 'INL201', lecturer: 'Prof. Davis', venue: 'Room 203', studyGuide: 'StudyGuides/Innovation-and-Leadership-201-INL201.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Innovation and Leadership 202', code: 'INL202', lecturer: 'Prof. Davis', venue: 'Room 203', studyGuide: 'StudyGuides/Innovation-and-Leadership-202-INL202.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Linear Programming 281', code: 'LPR281', lecturer: 'Dr. Clark', venue: 'Room 204', studyGuide: 'StudyGuides/Linear-Programming-281-LPR281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Mathematics 281', code: 'MAT281', lecturer: 'Dr. Clark', venue: 'Room 204', studyGuide: 'StudyGuides/Mathematics-281-MAT281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Programming 281', code: 'PRG281', lecturer: 'Prof. Anderson', venue: 'Room 205', studyGuide: 'StudyGuides/Programming-281-PRG281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Programming 282', code: 'PRG282', lecturer: 'Prof. Anderson', venue: 'Room 205', studyGuide: 'StudyGuides/Programming-282-PRG282.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Project Management 281', code: 'PMM281', lecturer: 'Dr. Johnson', venue: 'Room 206', studyGuide: 'StudyGuides/Project-Management-281-PMM281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Statistics 281', code: 'STA281', lecturer: 'Dr. Martinez', venue: 'Room 207', studyGuide: 'StudyGuides/Statistics-281-STA281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Web Programming 281', code: 'WPR281', lecturer: 'Prof. Lee', venue: 'Room 208', studyGuide: 'StudyGuides/Web-Programming-281-WPR281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Software Analysis & Design 281', code: 'SAD281', lecturer: 'Dr. Taylor', venue: 'Room 209', studyGuide: 'StudyGuides/Software-Analysis-and-Design-281-SAD281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Data Warehousing 281', code: 'DWH281', lecturer: 'Dr. Brown', venue: 'Room 210', studyGuide: 'StudyGuides/Data-Warehousing-281-DWH281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Internet Of Things 281', code: 'IOT281', lecturer: 'Prof. Lee', venue: 'Room 211', studyGuide: 'StudyGuides/Internet-Of-Things-281-IOT281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},
    {moduleName: 'Software Testing 281', code: 'SWT281', lecturer: 'Dr. Taylor', venue: 'Room 212', studyGuide: 'StudyGuides/Software-Testing-281-SWT281.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BCom'},

    // Third Year BCom
    {moduleName: 'Research Methods 381', code: 'RSH381', lecturer: 'Dr. Martinez', venue: 'Room 301', studyGuide: 'StudyGuides/Research-Methods-381-RSH381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Database Development 381', code: 'DBD381', lecturer: 'Dr. Brown', venue: 'Room 302', studyGuide: 'StudyGuides/Database-Development-381-DBD381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Innovation and Leadership 321', code: 'INL321', lecturer: 'Prof. Davis', venue: 'Room 303', studyGuide: 'StudyGuides/Innovation-and-Leadership-321-INL321.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Linear Programming 381', code: 'LPR381', lecturer: 'Dr. Clark', venue: 'Room 304', studyGuide: 'StudyGuides/Linear-Programming-381-LPR381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Machine Learning 381', code: 'MLG381', lecturer: 'Dr. Martinez', venue: 'Room 305', studyGuide: 'StudyGuides/Machine-Learning-381-MLG381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Project 381', code: 'PRJ381', lecturer: 'Dr. Johnson', venue: 'Room 306', studyGuide: 'StudyGuides/Project-381-PRJ381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Project Management 381', code: 'PMM381', lecturer: 'Dr. Johnson', venue: 'Room 307', studyGuide: 'StudyGuides/Project-Management-381-PMM381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Programming 381', code: 'PRG381', lecturer: 'Prof. Anderson', venue: 'Room 308', studyGuide: 'StudyGuides/Programming-381-PRG381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Software Engineering 381', code: 'SEN381', lecturer: 'Dr. Taylor', venue: 'Room 309', studyGuide: 'StudyGuides/Software-Engineering-381-SEN381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Web Programming 381', code: 'WPR381', lecturer: 'Prof. Lee', venue: 'Room 310', studyGuide: 'StudyGuides/Web-Programming-381-WPR381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Data Science 381', code: 'BIN381', lecturer: 'Dr. Martinez', venue: 'Room 311', studyGuide: 'StudyGuides/Data-Science-381-BIN381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Database Administration 381', code: 'DBA381', lecturer: 'Dr. Brown', venue: 'Room 312', studyGuide: 'StudyGuides/Database-Administration-381-DBA381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Statistics 381', code: 'STA381', lecturer: 'Dr. Martinez', venue: 'Room 313', studyGuide: 'StudyGuides/Statistics-381-STA381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Innovation Management 381', code: 'INM381', lecturer: 'Prof. Davis', venue: 'Room 314', studyGuide: 'StudyGuides/Innovation-Management-381-INM381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'Machine Learning 382', code: 'MLG382', lecturer: 'Dr. Martinez', venue: 'Room 315', studyGuide: 'StudyGuides/Machine-Learning-382-MLG382.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},
    {moduleName: 'User Experience Design 381', code: 'UAX381', lecturer: 'Prof. Lee', venue: 'Room 316', studyGuide: 'StudyGuides/User-Experience-Design-381-UAX381.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BCom'},

    // Fourth Year BCom
    {moduleName: 'Applied Information Technology 481', code: 'AIT481', lecturer: 'Dr. Johnson', venue: 'Room 401', studyGuide: 'StudyGuides/Applied-Information-Technology-481-AIT481.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 4, course: 'BCom'},
    {moduleName: 'Applied Information Technology 482', code: 'AIT482', lecturer: 'Dr. Johnson', venue: 'Room 401', studyGuide: 'StudyGuides/Applied-Information-Technology-482-AIT482.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 4, course: 'BCom'},
    {moduleName: 'Dissertation 481', code: 'DST481', lecturer: 'Dr. Taylor', venue: 'Room 402', studyGuide: 'StudyGuides/Dissertation-481-DST481.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 4, course: 'BCom'},

    // First Academic Year BIT
    {moduleName: 'Academic Writing 171', code: 'ACW171', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Academic-Writing-171-ACW171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Computer Architecture 171', code: 'COA171', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Computer-Architecture-171-COA171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Database Development 171', code: 'DBD171', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Database-Development-171-DBD171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'English Communication 171', code: 'ENG171', lecturer: 'Dr. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/English-Communication-171-ENG171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Information Systems 171', code: 'INF171', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Information-Systems-171-INF171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Innovation and Leadership 101', code: 'INL101', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-101-INL101.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Innovation and Leadership 102', code: 'INL102', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-102-INL102.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Mathematics 171', code: 'MAT171', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Mathematics-171-MAT171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Networking Development 171', code: 'NWD171', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Networking-Development-171-NWD171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Programming 171', code: 'PRG171', lecturer: 'Dr. Davis', venue: 'Room 105', studyGuide: 'StudyGuides/Programming-171-PRG171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Programming 172', code: 'PRG172', lecturer: 'Dr. Davis', venue: 'Room 105', studyGuide: 'StudyGuides/Programming-172-PRG172.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Statistics 171', code: 'STA171', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Statistics-171-STA171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},
    {moduleName: 'Web Programming 171', code: 'WPR171', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Web-Programming-171-WPR171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'BIT'},

    // Second Academic Year BIT
    {moduleName: 'Cloud-Native Application Architecture 271', code: 'CNA271', lecturer: 'Prof. Davis', venue: 'Room 203', studyGuide: 'StudyGuides/Cloud-Native-Application-Architecture-271-CNA271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Database Development 221', code: 'DBD221', lecturer: 'Dr. Brown', venue: 'Room 202', studyGuide: 'StudyGuides/Database-Development-221-DBD221.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Enterprise Systems 271', code: 'ERP271', lecturer: 'Dr. Clark', venue: 'Room 204', studyGuide: 'StudyGuides/Enterprise-Systems-271-ERP271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Ethics 271', code: 'ETH271', lecturer: 'Prof. Davis', venue: 'Room 203', studyGuide: 'StudyGuides/Ethics-271-ETH271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Information Systems 271', code: 'INF271', lecturer: 'Dr. Brown', venue: 'Room 202', studyGuide: 'StudyGuides/Information-Systems-271-INF271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Innovation and Leadership 201', code: 'INL201', lecturer: 'Prof. Davis', venue: 'Room 203', studyGuide: 'StudyGuides/Innovation-and-Leadership-201-INL201.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Innovation and Leadership 202', code: 'INL202', lecturer: 'Prof. Davis', venue: 'Room 203', studyGuide: 'StudyGuides/Innovation-and-Leadership-202-INL202.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Linear Programming 171', code: 'LPR171', lecturer: 'Dr. Clark', venue: 'Room 204', studyGuide: 'StudyGuides/Linear-Programming-171-LPR171.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Programming 271', code: 'PRG271', lecturer: 'Dr. Davis', venue: 'Room 205', studyGuide: 'StudyGuides/Programming-271-PRG271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Programming 272', code: 'PRG272', lecturer: 'Dr. Davis', venue: 'Room 205', studyGuide: 'StudyGuides/Programming-272-PRG272.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Project Management 271', code: 'PMM271', lecturer: 'Dr. Clark', venue: 'Room 204', studyGuide: 'StudyGuides/Project-Management-271-PMM271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Statistics 271', code: 'STA271', lecturer: 'Dr. Brown', venue: 'Room 202', studyGuide: 'StudyGuides/Statistics-271-STA271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},
    {moduleName: 'Web Programming 271', code: 'WPR271', lecturer: 'Dr. Smith', venue: 'Room 201', studyGuide: 'StudyGuides/Web-Programming-271-WPR271.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'BIT'},

    // Third Academic Year BIT
    {moduleName: 'Business Intelligence 371', code: 'BIN371', lecturer: 'Prof. Davis', venue: 'Room 301', studyGuide: 'StudyGuides/Business-Intelligence-371-BIN371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Cloud-Native Application Programming 371', code: 'CNA371', lecturer: 'Prof. Davis', venue: 'Room 301', studyGuide: 'StudyGuides/Cloud-Native-Application-Programming-371-CNA371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Data Analytics 371', code: 'DAL371', lecturer: 'Dr. Clark', venue: 'Room 302', studyGuide: 'StudyGuides/Data-Analytics-371-DAL371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Database Development 371', code: 'DBD371', lecturer: 'Dr. Brown', venue: 'Room 302', studyGuide: 'StudyGuides/Database-Development-371-DBD371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Innovation and Leadership 371', code: 'INL371', lecturer: 'Prof. Davis', venue: 'Room 303', studyGuide: 'StudyGuides/Innovation-and-Leadership-371-INL371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Programming 371', code: 'PRG371', lecturer: 'Dr. Davis', venue: 'Room 305', studyGuide: 'StudyGuides/Programming-371-PRG371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Project 371', code: 'PRJ371', lecturer: 'Dr. Clark', venue: 'Room 306', studyGuide: 'StudyGuides/Project-371-PRJ371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Project Management 371', code: 'PMM371', lecturer: 'Dr. Clark', venue: 'Room 306', studyGuide: 'StudyGuides/Project-Management-371-PMM371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Software Analysis & Design 371', code: 'SAD371', lecturer: 'Dr. Smith', venue: 'Room 307', studyGuide: 'StudyGuides/Software-Analysis-and-Design-371-SAD371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Software Engineering 371', code: 'SEN371', lecturer: 'Dr. Clark', venue: 'Room 308', studyGuide: 'StudyGuides/Software-Engineering-371-SEN371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Web Programming 371', code: 'WPR371', lecturer: 'Dr. Smith', venue: 'Room 309', studyGuide: 'StudyGuides/Web-Programming-371-WPR371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'Innovation Management 371', code: 'INM371', lecturer: 'Prof. Davis', venue: 'Room 310', studyGuide: 'StudyGuides/Innovation-Management-371-INM371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},
    {moduleName: 'User Experience Design 371', code: 'UAX371', lecturer: 'Prof. Davis', venue: 'Room 310', studyGuide: 'StudyGuides/User-Experience-Design-371-UAX371.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 3, course: 'BIT'},

    // First Academic Year for HC
    { moduleName: 'Mathematics 151', code: 'MAT151', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Mathematics-151-MAT151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Computer Architecture 151', code: 'COA151', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Computer-Architecture-151-COA151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Database Development 151', code: 'DBD151', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Database-Development-151-DBD151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'End User Computing 151', code: 'EUC151', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/End-User-Computing-151-EUC151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'English Communication 151', code: 'ENG151', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/English-Communication-151-ENG151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Information Systems 151', code: 'INF151', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Information-Systems-151-INF151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Innovation and Leadership 101', code: 'INL101', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-101-INL101.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Innovation and Leadership 102', code: 'INL102', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-102-INL102.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Network Development 151', code: 'NWD151', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Network-Development-151-NWD151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Programming 151', code: 'PRG151', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Programming-151-PRG151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Programming 152', code: 'PRG152', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Programming-152-PRG152.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC', prerequisites: 'PRG151' },
    { moduleName: 'Web Programming 151', code: 'WPR151', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Web-Programming-151-WPR151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC', prerequisites: 'PRG151' },
    { moduleName: 'Business Management 151', code: 'BUM151', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Business-Management-151-BUM151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },
    { moduleName: 'Entrepreneurship 151', code: 'ENT151', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Entrepreneurship-151-ENT151.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'HC' },

    // First Year - Core for Diploma
    { moduleName: 'Business Communication 161', code: 'BUC161', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Business-Communication-161-BUC161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Business Management and Entrepreneurship 161', code: 'BME161', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Business-Management-and-Entrepreneurship-161-BME161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Computer Architecture 161', code: 'COA161', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Computer-Architecture-161-COA161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Database Concept 161', code: 'DBC161', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Database-Concept-161-DBC161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Database Functionality 161', code: 'DBF161', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Database-Functionality-161-DBF161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'End User Computing 161', code: 'EUC161', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/End-User-Computing-161-EUC161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Innovation and Leadership 161', code: 'INL161', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-161-INL161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Internet of Things 161', code: 'IOT161', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Internet-of-Things-161-IOT161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Mathematics 161', code: 'MAT161', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Mathematics-161-MAT161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Network Development 161', code: 'NWD161', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Network-Development-161-NWD161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Problem Solving 161', code: 'PRS161', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Problem-Solving-161-PRS161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma' },
    { moduleName: 'Programming 161', code: 'PRG161', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Programming-161-PRG161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma', prerequisites: 'Programming Principles 161; Mathematics 161' },
    { moduleName: 'Programming Principles 161', code: 'PRP161', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Programming-Principles-161-PRP161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma', prerequisites: 'Problem Solving 161' },
    { moduleName: 'Web Programming 161', code: 'WPR161', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Web-Programming-161-WPR161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma', prerequisites: 'End-User Computing 161' },
    { moduleName: 'Statistics 161', code: 'STA161', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/Statistics-161-STA161.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 1, course: 'Diploma', prerequisites: 'EUC161' },
    
    // Second Year - Core for Diploma
    { moduleName: 'Database Development 261', code: 'DBD261', lecturer: 'Dr. Clark', venue: 'Room 104', studyGuide: 'StudyGuides/Database-Development-261-DBD261.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'Diploma', prerequisites: 'DBF161' },
    { moduleName: 'Enterprise Systems 261', code: 'ERP261', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Enterprise-Systems-261-ERP261.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'Diploma' },
    { moduleName: 'Innovation and Leadership 261', code: 'INL261', lecturer: 'Prof. Davis', venue: 'Room 103', studyGuide: 'StudyGuides/Innovation-and-Leadership-261-INL261.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'Diploma', prerequisites: 'INL161' },
    { moduleName: 'IT Law and Ethics 261', code: 'ILE261', lecturer: 'Dr. Smith', venue: 'Room 101', studyGuide: 'StudyGuides/IT-Law-and-Ethics-261-ILE261.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'Diploma' },
    { moduleName: 'Project Management 261', code: 'PMM261', lecturer: 'Dr. Brown', venue: 'Room 102', studyGuide: 'StudyGuides/Project-Management-261-PMM261.pdf', video: 'https://www.youtube.com/watch?v=gE060zaF6P8', year: 2, course: 'Diploma', prerequisites: 'EUC161' }

];