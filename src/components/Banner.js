function Banner({ backgroundValue, motto }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundValue})`,
      }}
    >
      <div className="banner__motto">{`${motto}`}</div>
    </div>
  );
}

export default Banner;
