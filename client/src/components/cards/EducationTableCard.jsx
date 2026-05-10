import Card from "../ui/Card/Card.jsx";

export default function EducationTableCard({ rows }) {
    return (
        <Card className="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Institution</th>
                        <th>Major/Focus</th>
                        <th>GPA</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, index) => (
                        <tr key={index}>
                            <td>{item.degree}</td>
                            <td>{item.institution}</td>
                            <td>{item.focus}</td>
                            <td>{item.gpa}</td>
                            <td>{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
