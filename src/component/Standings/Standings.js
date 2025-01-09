
import './Standings.css';

function Standings() {
  return (
    <div className="standings card">
      <h3>Standings</h3>
      <table>
        <thead>
          <tr>
            <th>Club</th>
            <th>HP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {/* Add standings data */}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
