<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ShowcaseOld from "$lib/components/ShowcaseOld.svelte";

  import { onMount } from "svelte";
  import { animate, stagger } from "animejs";

  onMount(() => {
    animate(".hero-line", {
      translateY: [60, 0],
      opacity: [0, 1],
      delay: stagger(200),
      duration: 700,
      easing: "easeOutExpo",
    });
  });
</script>

<svelte:head>
  <title>Team 1540 | History</title>
</svelte:head>

<Navbar active="robotics" />

<section
  class="relative flex flex-col items-center justify-center text-center py-24 px-6"
>
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
    bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
    bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      Robotics History
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
    >
      im gonna start with a quick off-time roadmap of our team
    </p>
  </div>
</section>

<ShowcaseOld
  name="KOWALSKI"
  subtitle="Built for the 2025 FIRST Robotics Competition game REEFSCAPE"
  gameOverviewLink="https://www.youtube.com/watch?v=YWbxcjlY9JY"
  revealLink="https://www.youtube.com/watch?v=G-jv65c7ypw"
  heroImage="/src/lib/assets/2025-1.jpg"
  galleryImages={["/src/lib/assets/2025-2.jpg", "/src/lib/assets/2025-3.jpg"]}
  specifications={[
    {
      title: "Drivetrain",
      items: [
        "SDS Mk4n swerve modules with Kraken x60 driving motors, Falcon 500 turning motors",
        "L1+ gearing for fast acceleration, top speed 14.2 ft/s, running FOC (Field Oriented Control) for steering and driving",
        'Modules raised to lower the chassis by 7/8"',
        "30” x 29.5” thickstock aluminum frame",
        "0.090” lightened aluminum bellypan, pattern allows for easy wire routing",
        "Bumpers utilize floor tiles and birch plywood backing for better impact absorption and durability, quickly removable with quick-release pi",
      ],
    },
    {
      title: "Intake",
      items: [
        "Compactly packaged dead axle pivot with pivot plate for quick replacements, 18:1 gearing for fast deployment powered by a single Falcon 500",
        "Direct L1 scoring or handoff to end effector",
        "Intake coral from ground or feeder station",
        "Dead axle rollers with 60A star wheels powered by a Falcon 500",
        "Passive side-wall funneling",
      ],
    },
    {
      title: "Arm",
      items: [
        "Gearbox with cam belt tensioning system and coaxial constant force spring integration tightly packaged within the elevator carriage",
        "Wires route through the axle for neat, well-protected wire run",
        "Plates heavily lightened for weight reduction",
        "1” OD dead axle shaft, power transferred through custom-machined gears",
        "Modular with easy removal via a snap ring",
        "Powered by a Kraken X60 with 28:1 reduction",
        "Directly geared off-axis CANcoder for precise absolute positioning",
        "Backlash reduction using shim tape and Loctite 680",
      ],
    },
    {
      title: "End Effector",
      items: [
        "Pocketed polycarbonate plates for siding with thinner polycarbonate plates for the top and bottom",
        "Extended bottom plate for better control of coral when scoring",
        "Four active rollers with 2” compliant wheels on ⅜” hex shafts for additional weight reduction",
        "One ½” roller with 4” compliant wheels to grip algae against a static backing",
        "Two laserCAN time-of-flight sensors to sense location/intake status of coral",
        "Directly mounted flush against the arm with all wires running directly through the arm to the end effector",
        "Single Falcon 500 mounted on the arm to run",
        "Utilizes 9mm HTD belts on 3D printed 18T pulleys powering 5 rollers",
        "3:1 reduction via pulleys from motor to first roller",
        "Additional 3:1 reduction (9:1 total reduction) for algae",
      ],
    },
    {
      title: "Elevator",
      items: [
        "Lightened thin-wall tubing to minimize weight",
        "¼” aluminum struts for front/back forces, aluminum tie rods with ball-end joints for side forces",
        "Gearbox integrated into the frame as a strong structural foundation, powered by 2 Kraken X60s with a 3:1 reduction using a 24T HTD pulley to power belt",
        "Continuous rigging, HTD 15mm Kevlar-backed belt in tubes power the arm",
        "Bearings as idler rollers to guide belt, rated to survive loads well over operating 2300N load",
        "Belts clamped with custom aluminum parts, belt bent over self and pressed together",
        "Tensioning with WCP cams on the carriage",
        "Constant force springs counteract gravity, allowing the extension to occur even faster",
      ],
    },
    {
      title: "Climber",
      items: [
        "Everybot-inspired hooks, with modifications to better hold cage, remove unnecessary material",
        "Self-adhesive tape on the inside face of hook to prevent cage slippage",
        "Parametrically calculated height for ideal cage grabbing and pivoting",
        "1” OD dead axle for structural support of the climbing structure",
        "Powered by a Falcon 500 with FOC into 100:1 MAXPlanetary",
        "Overall 360:1 reduction with sprockets, ensuring load is mainly on the chain and not gearbox",
        "3D printed ratcheting system at motor output keeps the climb up after the match without power",
        "Can be manually human-actuated to assist in declimbing and resetting the climb between matches",
      ],
    },
    {
      title: "Software",
      fullWidth: true,
      items: [
        "Field-centric swerve drive that uses 250Hz sensor reporting to maximize odometry accuracy",
        "Fully automated reef alignment and collision avoidance ensures precise alignment to any point on the reef from anywhere on our side of the field with no driver input",
        "Custom button board with layout of reef and intaking locations mimics field positioning, and allows drivers to select between different reef faces, scoring levels, and intaking areas for automatic alignment and driving",
        "4 Arducam OV9281 cameras on each swerve module, connected to 2 Orange Pi 5s running Photonvision to detect AprilTags on the field",
        "Autonomous trajectories generated with Choreo, which uses numerical optimization to find efficient paths that remain kinematically feasible",
      ],
    },
  ]}
  awards={[
    {
      title: "Dean's List Semi-Finalist",
      description: "District Championship - Sienna Cooper",
    },
    {
      title: "Event Finalist",
      description: "Wilsonville District Event",
    },
    {
      title: "Excellence in Engineering Award",
      description: "District Championship",
    },
  ]}
/>

<ShowcaseOld
  name="FRIED EGG"
  subtitle="Built for the 2024 FIRST Robotics Competition game CRESCENDO"
  gameOverviewLink="https://www.youtube.com/watch?v=9keeDyFxzY4"
  revealLink="https://www.youtube.com/watch?v=-noXKy4wT0k"
  heroImage="/src/lib/assets/2024-1.jpg"
  galleryImages={["/src/lib/assets/2024-2.jpg", "/src/lib/assets/2024-3.jpg"]}
  specifications={[
    {
      title: "Drivetrain",
      items: [
        "SDS Mk4i swerve modules with Falcon 500 motors running FOC (Field Oriented Control) for steering and driving",
        "L2 gearing for rapid acceleration and a top speed of 15.7 fps",
        "25.5” x 28” frame — 24” x 25” primary frame with 4” extension (and ½” of side plating)",
        "⅛” aluminum belly pan for lowered center of gravity.with 0.5” hole pattern for modular component placement",
      ],
    },
    {
      title: "Intakedexer",
      items: [
        "Combined intake and indexer, powered by one Falcon 500 motor with FOC in a 5:1 MAXPlanetary gearbox",
        "Under the bumper (UTB) intake for durability, supported by solid 1⁄4 '' aluminum side plates and ⅛” aluminum tubestock",
        "Custom 3D printed blocks channel notes into the center for most of full width intaking",
        "Two intake rollers with custom 3D-printed spacers and sushi rollers, combination of stealth, omni, and compliant wheels in the indexer",
        "Notes slide along passive nylon rollers resting on aluminum tubes to glide through without friction",
        "Notes stop at beam break before the splitting roller (separately powered) sends notes to either shooter or trap/amp",
      ],
    },
    {
      title: "Shooter",
      items: [
        "Sides independently powered for extremely reliable shooting with adjustable spin",
        "2 Falcon 500s with FOC geared up 1:1.5 for max note speed around 80 mph",
        "Sets of 3 3” diameter orange stealth wheels for a total of 6 shooter wheels on each side",
        "Pivots powered by a falcon 500 using #35 chain in overall 104.53:1 ratio",
        "Notes slide along passive nylon rollers resting on aluminum tubes to glide through in consistent manner without friction",
        "Fed by combination of small colsons and sushi rollers powered by Falcon with FOC",
      ],
    },
    {
      title: "Trap/Amp",
      items: [
        "Dedicated mechanism for reliable, top-down scoring into trap and amp",
        "Bends notes around 2 ⅞” Banebots T40 wheels",
        "Powered by Falcon 500 with FOC in a 3:1 MAXPlanetary, geared down to 9:1 for the ejecting wheels",
        "Notes slide along passive nylon rollers resting on aluminum tubes to glide through in consistent manner without friction",
        "Teflon-taped “rooster wattle” flap reduces friction for scoring in the trap",
      ],
    },
    {
      title: "Elevator/Climber",
      items: [
        "Positions for scoring in both amp and trap and climbs, moving between any position in 0.5 seconds",
        "2 Falcon 500s with FOC geared 11.57:1 for a 0.5 second climb (~3 second trap sequence once hooked)",
        "Dynamic climbing hooks on elevator latch the chain and hand off to passive hooks, allowing the elevator to raise again and score in trap",
        "Custom gearbox and chain routing for dense packaging",
      ],
    },
    {
      title: "Software",
      items: [
        "Current-sensing and beam break sensors to track the path of the note throughout the robot",
        "Dual-LED strips to indicate, impress, and intimidate",
        "Automatic shooter pivoting and drivetrain angling for shooter shots and over-stage shuffling",
        "Dual limelights running MegaTag2 and 250hz odometry for reliable and accurate pose estimation",
        "Automatic amp and climb sequences that manipulate the note and elevator",
      ],
    },
  ]}
  awards={[
    {
      title: "Event Winner",
      description: "Wilsonville District Event",
    },
    {
      title: "Event Winner",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Excellence in Engineering Award",
      description: "OSF District Event",
    },
  ]}
/>

<ShowcaseOld
  name="PESTO"
  subtitle="Built for the 2023 FIRST Robotics Competition game CHARGED UP"
  gameOverviewLink="https://youtu.be/0zpflsYc4PA"
  revealLink="https://youtu.be/0-0po7hmveI"
  heroImage="/src/lib/assets/2023-1.jpeg"
  specifications={[
    {
      title: "Drivetrain",
      items: [
        "SDS Mk4i swerve modules with Falcon 500 motors for steering and driving",
        "L2 gearing for 16.3ft/s top speed",
        '28" x 25" frame for small footprint on charge station',
        "1/8” solid aluminum bellypan and chassis rails for low center of gravity.",
      ],
    },
    {
      title: "Arm",
      items: [
        "2-stage, belt-driven telescoping arm capable of reaching and scoring on any node",
        "Full range of motion allows pickup on both front and back of robot",
        "Dual Falcon 500s geared at 196:1 for both strong and fast (180deg/s) rotation",
        "Single NEO geared 16:1 for fast extension",
        "Pigeon IMU, soft limits, and position constraints ensure arm orientation is always known and respecting extension and height limits",
      ],
    },
    {
      title: "Grabber",
      items: [
        'Manipulates cones and cubes with 8x 4" compliance wheels driven by two NEO 550s geared 25:1',
        "Cones pulled tightly into backstop for consistent orientation",
        "Capable of picking up cones from floor, double substation, and tipped cones when pointed toward the robot",
        "Automated switchover to constant holding force to prevent dropped game pieces",
        "Easily replaceable via modular connection to arm",
      ],
    },
    {
      title: "Software",
      items: [
        "2x Limelight 3's for quick AprilTag recognition and robot localization in any orientation",
        "Automatic grid alignment using AprilTags, on-the-fly trajectory generation, and an intuitive custom driver console",
        "Motion profiles for fast, smooth arm actuation",
        "LED strips for indicating desired game piece to human player",
      ],
    },
  ]}
  awards={[
    {
      title: "Innovation in Controls",
      description: "World Championship",
    },
    {
      title: "Event Finalist",
      description: "OSF District Event",
    },
    {
      title: "Gracious Professionalism Award",
      description: "OSF District Event",
    },
    {
      title: "Quality Award",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Event Winner",
      description: "CAIS District Event",
    },
    {
      title: "Industrial Design Award",
      description: "CAIS District Event",
    },
  ]}
/>

<ShowcaseOld
  name="HICCUP"
  subtitle="Built for the 2022 FIRST Robotics Competition game RAPID REACT"
  gameOverviewLink="https://youtu.be/LgniEjI9cCM"
  heroImage="/src/lib/assets/2022-1.jpg"
  specifications={[
    {
      title: "Drivetrain",
      items: [
        "6 wheel tank drive, powered by 4 falcon 500s",
        "Top speed of 13.4 FPS, extremely high pushing power",
        "Modified west coast drive able to withstand falls",
      ],
    },
    {
      title: "Shooter",
      items: [
        "Dual vertical flywheels independently powered by individual falcon 500s",
        "2 position, pneumatically articulated hood",
        "DCombination of hood articulation and flywheel speed control allow shooting from anywhere, including fender and launch zone",
      ],
    },
    {
      title: "Climber",
      items: [
        "Can climb to any rung",
        "Two single stage elevator arms and two static arms with passive latching hooks",
        "Each winch is driven by a Falcon 500 and arms are moved back and forth with pneumatics",
      ],
    },
    {
      title: "Intakedexer",
      items: [
        "Through bumper intake",
        "Utilizes vex pro 2” mecanum wheels",
        "Powered by single falcon 500 with 2:1 belt reduction",
        "Extremely robust 2 layer polycarb design, reinforced with aluminum in high impact areas, aluminum beater bar protects wheels",
        "Fast pneumatic articulation helps prevent frame perimeter penalties",
      ],
    },
    {
      title: "Software",
      fullWidth: true,
      items: [
        "Written in Java and open source at our GitHub page",
        "Assisted mobile shooter parameter tuning and data collection (FEATHER: Fast Electronic Accuracy Tuning Helper for Efficiency Refining)",
        "Automatic lineup and shooting with Limelight and LIDAR",
        "Drive camera with H.265 encoding in hardware",
      ],
    },
  ]}
  awards={[
    {
      title: "Imagery Award",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Event Finalist",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Autonomous Award",
      description: "CAIS District Event",
    },
  ]}
/>

<ShowcaseOld
  name="LUNA"
  subtitle="Built for the 2020 FIRST Robotics Competition game INFINITE RECHARGE"
  gameOverviewLink="https://www.youtube.com/watch?v=gmiYWTmFRVE"
  revealLink="https://youtu.be/iNo_8aDyXyc"
  heroImage="/src/lib/assets/2020-1.jpg"
  specifications={[
    {
      title: "Drivetrain",
      items: [
        "Custom tank drive powered by 4 Falcon 500s",
        "Top speed of 14.3 FPS",
        "6” wheels to traverse bumps",
        "Fully shielded underbelly to prevent stuck balls",
      ],
    },
    {
      title: "Shooter",
      items: [
        "2 Falcon 500s driving 6” aluminum flywheel with polyurethane tread",
        "Maximum surface speed of over 100 mph (150 FPS)",
        "Continuously adjustable UHMWPE hood to shoot from any position, including behind the control panel",
        "Fires full volley in less than a second",
      ],
    },
    {
      title: "Climber",
      items: [
        "Single-stage elevator climber with spring-loaded hook",
        "Single Falcon motor can raise robot to full height in under a second",
        "Can climb either solo or with a partner",
        "Servo-actuated ratchet lock to prevent backdriving",
      ],
    },
    {
      title: "Intakedexer",
      items: [
        "Full width roller intake with V-hopper to index balls into a single line",
        "Polybelt conveyor to stage balls before shooting",
        "Stores 5 balls",
      ],
    },
    {
      title: "Software",
      fullWidth: true,
      items: [
        "Written in Java",
        "RAMSETE non-linear feedback controller for auto path following",
        "Automatic lineup and full vision target pose estimation using Limelight camera, LIDAR ranging, and NavX IMU",
        "Field-oriented drive controls",
        "Indexer management state machine for efficient ball storage",
        "Linear interpolation algorithm to determine wheel speed and hood angle for any position",
        "Wide-angle driver cameras with hardware-accelerated H.264 streaming",
        "All our code is open-source at github.com/flamingchickens1540",
      ],
    },
  ]}
  awards={[
    {
      title: "1 Ranked team",
      description: "Qualifying Tournament (season cut short)",
    },
    {
      title: "Dean List's Winner",
      description: "World Championship - Tiffany Toh",
    },
    {
      title: "Autonomous Award",
      description: "CAIS District Event",
    },
  ]}
/>

<ShowcaseOld
  name="PHINEAS"
  subtitle="Built for the 2019 FIRST Robotics Competition game DESTINATION: DEEP SPACE"
  gameOverviewLink="https://youtu.be/Mew6G_og-PI"
  revealLink="https://youtu.be/HQ7DZsimjpo"
  heroImage="/src/lib/assets/2019-1.jpg"
  specifications={[
    {
      title: "Drivetrain",
      items: [
        '6-wheel 2+4 tank drive with 6" wheels to traverse Hab platform',
        "6 775pros in custom single-speed gearboxes with a top speed of 13 fps",
      ],
    },
    {
      title: "Elevator",
      items: [
        "Single stage to reach loading station, cargo ship, and 2nd level of rocket",
        "Chain-drive",
        "2 NEO motors with position PID control to reach full height of 28 inches in less than one second",
      ],
    },
    {
      title: "Wrist",
      items: [
        "Motorized with pneumatic assist",
        "Pivots down for floor acquisition of hatches and cargo",
      ],
    },
    {
      title: "Cargo Intake",
      items: [
        "Extra-wide intake with mecanum wheels to quickly center cargo",
        "Can intake from floor or from loading station",
        "Photoelectric sensor to detect ball and automatically stop rollers",
      ],
    },
    {
      title: "Hatch Mechanism",
      items: [
        "Pneumatically actuated grabber grabs center of hatch from floor or loading station",
        "Spring-loaded pivot allows for misalignment",
        "Extends past bumpers for scoring and pickup",
        "Stows in compact package underneath cargo intake",
      ],
    },
    {
      title: "Climber",
      items: [
        "Motorized arms with twin 775pros to lift against Hab platform",
        "Rear pneumatic cylinder lowers wheels to lift back of the robot",
        "Arm wheels connected to drivetrain with timing belts",
        "High-traction wheels to increase grip against Hab plastic",
        "NavX-MXP IMU for advanced pitch stabilization during climb",
        "Can climb Hab Level 3 in under ten seconds",
      ],
    },
    {
      title: "Software",
      fullWidth: true,
      items: [
        "Written in Java using our library, ROOSTER",
        "Automatic lineup using Limelight vision tracking",
        "180-degree fisheye camera with H.264 streaming for high resolution and low latency during sandstorm and teleop",
      ],
    },
  ]}
  awards={[
    {
      title: "#1 Ranked team x 2",
      description: "Qualifying Tournaments",
    },
    {
      title: "Quality Award",
      description: "CAIS District Event",
    },
    {
      title: "Autonomous Award",
      description: "Wilsonville District Event",
    },
  ]}
/>

<ShowcaseOld
  name="PANDORA"
  subtitle="Built for the 2018 FIRST Robotics Competition game POWER UP"
  gameOverviewLink="https://youtu.be/HZbdwYiCY74"
  revealLink="https://youtu.be/db6T-RSUYkU"
  heroImage="/src/lib/assets/2018-1.jpg"
  specifications={[
    {
      title: "Drivetrain",
      items: [
        "6-wheel drive (4 tractions, 2 omnis) 6” diameter wheels",
        "6 775 Pros in custom gearboxes",
        "Non-shifting",
        "Top speed = 13 fps",
      ],
    },
    {
      title: "Elevator",
      items: [
        "Chain-driven",
        "2 stages",
        "Made from 1x1 80-20 and uses 80-20 rollers",
        "Can double stack cubes when scale is in highest position",
      ],
    },
    {
      title: "Cargo Intake",
      fullWidth: true,
      items: [
        "Independently driven articulating arms",
        "4” compliant wheels for grip",
        "Can grab cubes in 13” and 11” orientations",
        "Mounted on a “wrist” to rotate down over bumpers and back through elevator",
        "Can deposit cubes at front or back of robot",
      ],
    },
  ]}
  awards={[
    {
      title: "Division Finalist",
      description: "Pacific Northwest District Championship",
    },
  ]}
/>

<ShowcaseOld
  name="HEN SOLO"
  subtitle="Built for the 2017 FIRST Robotics Competition game STEAMWORKS"
  gameOverviewLink="https://youtu.be/EMiNmJW7enI"
  revealLink="https://youtu.be/MgXsboRnHNs"
  heroImage="/src/lib/assets/2017-1.jpg"
  specifications={[
    {
      title: "Drivetrain",
      items: [
        "6-wheel west coast drive drop center",
        "6 775 Pros",
        "Non-shifting",
        "Top speed = 13 fps",
      ],
    },
    {
      title: "Shooter",
      items: [
        "80% accuracy",
        "Speed balls per second",
        "2 775 pros",
        "3 in. Colson flywheel",
        "Shoot from base of boiler for ease of alignment and protection against defense",
        "Belt feeder and indexer capable of holding up to 5 balls",
        "45+ ball holding capacity",
      ],
    },
    {
      title: "Gear Mechanism",
      items: [
        "Passive chute to intake gears from feeder station",
        "Servo drop release system for quick deployment on peg independent of pilot",
      ],
    },
    {
      title: "Miscellaneous",
      items: [
        "18-in wide floor intake",
        "Climbing mechanism can climb rope in  < 5 seconds",
        "Winch with velcro acquisition system",
      ],
    },
  ]}
  awards={[
    {
      title: "Engineering Inspiration Award",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Chairman's Award",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Quarterfinalist",
      description: "Pacific Northwest District Championship",
    },
  ]}
  publicity={[
    {
      title: "Gazette Times",
      description: "Crescent Valley robotics focused on developing freshmen",
      link: "https://gazettetimes.com/news/local/article_d6b76612-ea0b-551e-9fc2-936d60e316a0.html",
    },
  ]}
/>

<ShowcaseOld
  name="ZUKO"
  subtitle="Built for the 2016 FIRST Robotics Competition game STRONGHOLD"
  gameOverviewLink="https://youtu.be/VqOKzoHJDjA"
  revealLink="https://youtu.be/U4_wsfItlaE"
  heroImage="/src/lib/assets/2016-1.jpg"
  specifications={[
    {
      title: "Drivetrain",
      items: ["6-CIM single speed", "Top speed of 15 fps"],
    },
    {
      title: "Defenses",
      items: [
        "Capable of a full solo breach, regardless of field configuration",
      ],
    },
    {
      title: "Shooter",
      items: [
        "High goal",
        "Flywheel design (heavy for stable shooting)",
        "Dual cameras attached to base for accuracy",
      ],
    },
    {
      title: "Intake",
      items: [
        "Ground pickup works from field and human player station",
        "Low goal capable",
      ],
    },
    {
      title: "Wheels",
      items: [
        "8-inch pneumatic traction wheels, moves over all defenses with ease",
      ],
    },
    {
      title: "Software",
      items: ["Sophisticated power management to prevent brownouts"],
    },
  ]}
  awards={[
    {
      title: "Innovation in Controls",
      description: "World Championship",
    },
    {
      title: "Chairman's Award",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Quarterfinalist",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Champion",
      description: "Oregon City District Event",
    },
  ]}
/>

<ShowcaseOld
  name="QUASAR"
  subtitle="Built for the 2015 FIRST Robotics Competition game RECYCLE RUSH"
  gameOverviewLink="https://youtu.be/W6UYFKNGHJ8"
  revealLink="https://youtu.be/Be9ndtklCQo"
  heroImage="/src/lib/assets/2015-1.jpg"
  specifications={[
    {
      title: "General",
      fullWidth: true,
      items: [
        "Octocanum drive with pneumatic suspension - 10fps top speed",
        "Internal elevator stacks up to five totes",
        "Internal rolles eject totes smoothly",
        "External rollers align totes for manipulation",
        "Forklift lifts totes and containers",
      ],
    },
  ]}
  awards={[
    {
      title: "Engineering Inspiration Award",
      description: "Wilsonville District Event",
    },
    {
      title: "Chairman's Award",
      description: "Pacific Northwest District Championship",
    },
    {
      title: "Dean’s List Finalist",
      description: "World Championship - Jacob Bendicksen",
    },
  ]}
  publicity={[
    {
      title: "Oregon Live",
      description:
        "Two Oregon robotics teams, one from Catlin Gabel, one all children of Intel employees, win state title, head to world competition",
      link: "https://www.oregonlive.com/education/2015/01/two_middle_school_teams_one_fr.html",
    },
  ]}
/>

<ShowcaseOld
  name="APOLLO"
  subtitle="Built for the 2014 FIRST Robotics Competition game AERIAL ASSIST"
  gameOverviewLink="https://youtu.be/oxp4dkMQ1Vo"
  heroImage="/src/lib/assets/2014-1.jpeg"
  specifications={[
    {
      title: "General",
      fullWidth: true,
      items: [
        "Eight wheel drive",
        "13 fps high gear, 8 fps low gear",
        "Highly efficient ball collection and disposal",
        "High goal catapult with hot goal detection",
        "Two ball autonomous",
        "Low goal scoring through ball disposal system",
      ],
    },
  ]}
  awards={[
    {
      title: "Innovation in Controls",
      description: "World Championship",
    },
    {
      title: "Chairman's Award",
      description: "Pacific Northwest District Championship",
    },
  ]}
/>

<ShowcaseOld
  name="INFERNO"
  subtitle="Built for the 2013 FIRST Robotics Competition game ULTIMATE ASCENT"
  gameOverviewLink="https://www.youtube.com/watch?v=itHNW2OFr4Y"
  heroImage="/src/lib/assets/2013-1.jpeg"
  specifications={[
    {
      title: "General",
      items: [
        "Weight: 119.65 lbs.",
        "can drive under pyramid",
        "29” x 27” x 23” (arm extends to 38.5”)",
        "hangs on first level using pnuematics",
      ],
    },
    {
      title: "Drivetrain",
      items: ["six 4” VEXpro Versa wheels", "8.6 (high gear), 3.3 (low gear)"],
    },
    {
      title: "Frisbee Pickup",
      items: [
        "can load on front of robot through 42” slot",
        "can pick up 2 Frisbees at once",
        "second camera to help driver see Frisbees",
        "scoop mechanism with actuating jaw",
      ],
    },
    {
      title: "Shooter",
      items: [
        "3-wheeled linear shooter, manual 24º vertical range of motion",
        "live camera feed and overlaid target outlines assist driver aiming",
      ],
    },
    {
      title: "Autonomous",
      items: [
        "scores up to 42 points by collecting disks underneath pyramid",
        "can score preloaded disks from anywhere on the pyramid",
        "can use various preset modes, and can use Kinect",
      ],
    },
  ]}
  awards={[
    {
      title: "Finalist",
      description: "Oklahoma District Event",
    },
    {
      title: "Chairman's Award",
      description: "Pacific Northwest District Championship",
    },
  ]}
/>

<ShowcaseOld
  name="PHOENIX"
  subtitle="Built for the 2012 FIRST Robotics Competition game REBOUND RUMBLE"
  gameOverviewLink="https://youtu.be/W6UYFKNGHJ8"
  heroImage="/src/lib/assets/2012-1.jpeg"
  awards={[
    {
      title: "Winner",
      description: "Oklahoma District Event",
    },
    {
      title: "Chairman's Award",
      description: "Oklahoma District Event",
    },
    {
      title: "Dean's List Winner",
      description: "World Championship - Marina Dimitrov",
    },
  ]}
/>

<ShowcaseOld
  name="LIGHTNING"
  subtitle="Built for the 2011 FIRST Robotics Competition game LOGO MOTION"
  gameOverviewLink="https://www.youtube.com/watch?v=oxujTCgQPgg"
  heroImage="/src/lib/assets/2011-1.jpeg"
  specifications={[
    {
      title: "Process",
      fullWidth: true,
      items: [
        "After many days of designing, the Flaming Chickens began to build Thunder, the prototype for Lightning. Obstacles arose and challenges were faced, but the Flaming Chickens overcame each  and every one to construct the ideal robot.",
        `Lightning is fully loaded to be a fast and capable scorer in LOGOMOTION.
        It features Team 1540′s first 6WD robot with shifting transmissions for
        blistering speed in high gear and strong pushing ability in low gear.
        Lighting has a jointed arm to allow for quick and easy scoring, as well
        as to protect the game piece as it flies across the field. Lightning has
        a pneumatic minibot deployment mechanism for quick launches, as well as a 
        transparent claw for easy ground loading and tube placement. Lighting also has 
        a 3 LED matrix on the front to aid the feeders in game piece delivery. All of 
        these features are aided by a 3 camera set up for maximum spacial awareness 
        on the field. Overall, Lighting is one of the cleanest and most complete robots 
        that our program has ever created!`,
      ],
    },
  ]}
  awards={[
    {
      title: "Alliance Captain & Finalist",
      description: "San Diego District Event",
    },
    {
      title: "Innovation in Controls",
      description: "San Diego District Event",
    },
  ]}
/>

<ShowcaseOld
  name="2010"
  subtitle="Built for the 2010 FIRST Robotics Competition game BREAKAWAY"
  gameOverviewLink="https://youtu.be/iheq7yar5c4"
  heroImage="/src/lib/assets/2010-1.jpeg"
  awards={[
    {
      title: "Chairman's Award",
      description: "Oregon District Event",
    },
    {
      title: "Alliance Captain & Winner",
      description: "Colorado District Event",
    },
    {
      title: "Dean's List Finalist",
      description: "Oregon District Event - Henry Gordon",
    },
  ]}
/>

<ShowcaseOld
  name="2009"
  subtitle="Built for the 2009 FIRST Robotics Competition game LUNACY"
  gameOverviewLink="https://youtu.be/ZnGfbGzEFrM"
  heroImage="/src/lib/assets/2009-1.jpeg"
  awards={[
    {
      title: "Engineering Inspiration Award",
      description: "Oregon Regional",
    },
  ]}
/>

<ShowcaseOld
  name="2008"
  subtitle="Built for the 2008 FIRST Robotics Competition game OVERDRIVE"
  gameOverviewLink="https://youtu.be/LYnUDaEi1D8"
  heroImage="/src/lib/assets/2008-1.jpeg"
  awards={[
    {
      title: "Engineering Inspiration Award",
      description: "Oregon Regional",
    },
    {
      title: "Alliance Captain & Winner",
      description: "Oregon Regional",
    },
  ]}
/>

<ShowcaseOld
  name="2007"
  subtitle="Built for the 2007 FIRST Robotics Competition game RACK N ROLL"
  gameOverviewLink="https://youtu.be/FJtWEUfNnBE"
  heroImage="/src/lib/assets/2007-1.jpeg"
  awards={[
    {
      title: "Chairman's Award",
      description: "Oregon Regional",
    },
    {
      title: "Alliance Captain & Finalist",
      description: "Oregon Regional",
    },
  ]}
/>

<ShowcaseOld
  name="2006"
  subtitle="Built for the 2006 FIRST Robotics Competition game AIM HIGH"
  gameOverviewLink="https://youtu.be/PlADdmCAMB8"
  heroImage="/src/lib/assets/2006-1.jpeg"
/>

<ShowcaseOld
  name="2005"
  subtitle="Built for the 2005 FIRST Robotics Competition game TRIPLE PLAY"
  gameOverviewLink="https://youtu.be/6ePwDtrthWE"
  heroImage="/src/lib/assets/2005-1.jpeg"
  awards={[
    {
      title: "Rookie Inspiration Award",
      description: "Pacific Northwest Regional",
    },
    {
      title: "Best Website Award",
      description: "Pacific Northwest Regional",
    },
    {
      title: "Best Website Award",
      description: `World Championship - all the way back in our rookie year,
      we won Best Website award at the world championship.
      now, 21 years later, long past the time when it was so tricky,
      I stand today on the shoulders of giants with this new redesign.
      - vikas, 17/1/2026`,
    },
  ]}
/>

<Footer />

<style>
  :global(body) {
    margin: 0;
    background-color: #1c1c1c;
  }
</style>
