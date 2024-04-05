import statysticData from '../json/data.json' 

 
export const Statistic = () => {
    return (
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {Object.entries(statysticData).map(([id, { label, percentage }]) => (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  