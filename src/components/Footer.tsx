function Footer() {
  return (
    <div>
      <hr className="border-dark-spring-green border-2"></hr>
      <div className="flex items-center justify-between pt-8 bg-night-green bg-ivy-image bg-repeat-x bg-bottom">
        <img
          src="images/leaves_corner.png"
          className="scale-x-[-1] h-80 left-0"
        ></img>
        <div className="pb-36">All image credits in README.md</div>
        <img src="images/leaves_corner.png" className="h-80 right-0"></img>
      </div>
    </div>
  );
}

export default Footer;
