const InfoDiv = ({ title, info }) => {
  return (
    <div className="infoDiv">
      <div className="infoTitle">{title}</div>
      <div className="infoInfo">{info}</div>
    </div>
  );
};

export default InfoDiv;
