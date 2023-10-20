import Badge from "../../UI/Badge";

const TableBadges = ({ badges, activeFilter, filterHandler }) => {
  return (
    <ul className="flex flex-row gap-3">
      {badges.map((badge, index) => (
        <li key={index}>
          {activeFilter === badge.value ? (
            <Badge
              active={true}
              text={badge.label}
              onClick={() => filterHandler(badge.attr, badge.value)}
            />
          ) : (
            <Badge
              text={badge.label}
              onClick={() => filterHandler(badge.attr, badge.value)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TableBadges;
