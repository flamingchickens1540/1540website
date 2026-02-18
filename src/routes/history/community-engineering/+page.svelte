<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ShowcaseOld from "$lib/components/ShowcaseOld.svelte";
  import { animate, stagger } from "animejs";
  import { onMount } from "svelte";

  onMount(() => {
    animate(".hero-line", {
      translateY: [60, 0],
      opacity: [0, 1],
      delay: stagger(150),
      duration: 700,
      easing: "easeOutExpo",
    });
  });
</script>

<svelte:head>
  <title>Team 1540 | Community Engineering</title>
</svelte:head>

<Navbar active="community-engineering" />

<section
  class="relative flex flex-col items-center justify-center text-center py-24 px-6"
>
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
    bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
    bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      Community Engineering
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
    >
      Robotics skills applied to real-world problems.
    </p>
  </div>
</section>

<ShowcaseOld
  name="BeanBagBot"
  subtitle="BeanBagBot allows individuals affected by spinal cord injuries who are unable to play cornhole. This Engineering team partnered with the Oregon Spinal Cord Injury Connection to build a robot that throws cornhole bags. The robot was debuted at the Oregon Spinal Cord Injury Connection’s Cornhole Tournament."
  revealLink="https://www.youtube.com/watch?v=AJUFuw5KJg8"
  heroImage="/src/lib/assets/beanbagbot.jpeg"
  galleryImages={["/src/lib/assets/beanbagbot2.jpg"]}
/>

<ShowcaseOld
  name="FlowSync"
  subtitle="Inefficient and water-wasting sprinkler systems are frequently utilized to water lawns and gardens. Many sprinklers oversaturate the ground, resulting in water waste and runoff that contributes to problems including soil erosion and water contamination. This waste of water is a significant problem, as it can have serious environmental and economic consequences. Because water is a limited resource that is becoming increasingly scarce in some locations, wasting it through ineffective irrigation techniques can have a negative influence on the economy by raising water prices and other costs."
  revealLink="https://youtu.be/zX_0wQipwGg"
  heroImage="/src/lib/assets/flowsync.png"
/>

<ShowcaseOld
  name="Climate Score"
  subtitle="Climate Score delivers a tool that helps to address the general issue of climate health by assessing a property’s climate impact. Climate Score provide users with the vital information necessary to make smarter decisions about managing their current property or purchasing a future one."
  revealLink="https://youtu.be/4yHLMDMggoA"
  heroImage="/src/lib/assets/climatescore.png"
  galleryImages={[
    "/src/lib/assets/climatescore2.png",
    "/src/lib/assets/climatescore3.png",
  ]}
  specifications={[
    {
      title: "Details",
      fullWidth: true,
      items: [
        "At Climate Score, we strive to get people talking about the impact their housing and remodeling decisions have on the climate and their lives. Did you know that your property has an impact on the climate? Dramatic disparities exist in how U.S. households contribute to climate change. Our website gathers data from various sources to provide current and potential property owners with a clear idea of their impact. This helps our users make smarter decisions about managing their current property or purchasing a future one. We are protecting our climate one individual and one decision at a time!",
        "Climate Score uses data provided by the user, as well as publicly available data, to compute a Climate Score on a scale of 100. The higher the score, the less negative impact your property has on climate change. Each property has a default score, shown on our website, based on our preset weighting of various impact factors (e.g., walkability, energy systems, water systems, etc.) We selected the default weight based on our research into what existing factors impact the climate most. For example, we weighted factors that impact the climate more directly - such as carbon footprint data - more heavily than Walk Score data that defines the walkability of the neighborhood. However, users can change the weighting system. The ability to use custom weights allows individuals or corporations to focus on what is most important to them.",
      ],
    },
  ]}
/>

<ShowcaseOld
  name="SnapRamp"
  subtitle="All across the U.S., over 3 million wheelchair users face the problem of accessibility. Stairs are one of the most common problems with accessibility. SnapRamp is an innovative solution to this. Made of LEGO-like blocks, our ramp is a portable, inexpensive, easy-to-install ramp that solves a common problem among wheelchair users."
  revealLink="https://youtu.be/FfNux0Z13XQ"
  heroImage="/src/lib/assets/snapramp.jpeg"
  galleryImages={["/src/lib/assets/snapramp2.png"]}
  specifications={[
    {
      title: "Details",
      fullWidth: true,
      items: [
        "All across the U.S., over 3 million wheelchair users face the problem of accessibility. Stairs are one of the most common problems with accessibility. And while other ramps, such as professionally-installed ramps or DIY ramps are viable options for some people, they each come with certain problems. Professionally-installed ramps are expensive and unfit for places where such installations are not allowed by the property owner. DIY ramps can be unsafe and are not an option for people without construction skills and limited mobility. SnapRamp is an innovative solution to this. Made of LEGO-like blocks, our ramp is a portable, inexpensive, easy-to-install ramp that solves a common problem among wheelchair users.",
        "“I would use this product if [...] I was renting a house or apartment that had a couple of stairs and I wasn’t allowed to make anything permanent.” — a wheelchair user",
      ],
    },
  ]}
  awards={[
    {
      title: "Conrad Challenge",
      description:
        "The Conrad Challenge is a purpose-driven STEM innovation competition that is creating the next generation of entrepreneurs who will change the world.",
    },
  ]}
/>

<ShowcaseOld
  name="ZipBag"
  subtitle="A common task in industrial settings is to open, fill and close zip lock bags with little parts. You’ll often find these tiny bags with things you buy filled with fasteners and such. People with physical or cognitive differences can have difficulty doing this efficiently. ZipBag is an electromechanical device that makes it a snap."
  revealLink="https://youtu.be/FfNux0Z13XQ"
  heroImage="/src/lib/assets/zipbag.jpg"
  specifications={[
    {
      title: "Details",
      fullWidth: true,
      items: [
        "This Engineering team partnered with On-the-Move PDX to build a Ziploc bag opening and closing device. The device, called ZipBag, presents a safe and easy way for people with limb differences and lower dexterity to handle resealable bags. Utilizing foot pedals and a simple design, ZipBag requires the use of only one hand and a minimal amount of fine motor skills to operate. According to On-the-Move, ZipBag has the potential to increase productivity and remove barriers to employment for people with limb differences and lower dexterity.",
        "ZipBag won first place and the people’s choice award in the national Source America Design Competition",
      ],
    },
  ]}
  awards={[
    {
      title: "1st place & People’s Choic",
      description: "Source America Challenge",
    },
  ]}
/>

<ShowcaseOld
  name="4T"
  subtitle="A common problem in the garment industry are the extra threads left over after sewing a seam, called thread tails. Someone has to trim those threads but that can be difficult for people with disabilities. This team created an ingenious 3D-printed shell that integrates an off-the-shelf shaver and portable vacuum into a device that makes this task much quicker."
  revealLink="https://youtu.be/_CHgpxqJjPU"
  heroImage="/src/lib/assets/4t.png"
  galleryImages={["/src/lib/assets/4t2.png"]}
  specifications={[
    {
      title: "Details",
      fullWidth: true,
      items: [
        "A common problem in the garment industry are the extra threads left over after sewing a seam, called thread tails. Someone has to trim those threads but that can be difficult for people with disabilities.",
        "This team’s tool enables disabled members of the workforce to trim threads from garments, a key step in the apparel production process. This trimming tool has three key parts that function together; hair clippers, a portable vacuum, and a 3D printed shell. The vacuum sucks the thread away from the garment removing the need for the workers to hold the thread. The hair clippers then cut the thread with minimal worker effort. The shell holds the device together in a consistent way.  We have found our design to be tolerant of placement errors compared to more traditional methods such as the use of scissors which can have a low tolerance for misplacement. The expected cost for manufacturing this tool is approximately $257 with an expected life similar to that of portable vacuums (e.g., 2-3 years). Overall, this thread trimmer offers workers a solution for removing threads that is quick and effective.",
      ],
    },
  ]}
/>

<ShowcaseOld
  name="TaskTime"
  subtitle="TaskTime, in many ways, builds off the work of a group of students on team 1540 who were SourceAmerica finalists a couple years ago. The app they designed, nicknamed “JonApp” was built to help Jon, a staff member in Catlin’s media department, catalogue and keep track of the camera equipment. The JonApp was designed and coded specifically to Jon’s needs at the time, and the way in which it was developed didn't allow for easy addition or deletion of new cameras, equipment, tasks, or projects."
  revealLink="https://youtu.be/qPC5QnQzAFQ"
  heroImage="/src/lib/assets/tasktime.png"
  specifications={[
    {
      title: "Details",
      fullWidth: true,
      items: [
        "TaskTime, in many ways, builds off the work of a group of students on team 1540 who were SourceAmerica finalists a couple years ago. The app they designed, nicknamed “JonApp” was built to help Jon, a staff member in Catlin’s media department, catalogue and keep track of the camera equipment. In discussion with Jon and his supervisor, and in observation of his work, we were able to see what worked well and what needed improvement in the app and were able to apply that knowledge to our development of TaskTime. The JonApp was designed and coded specifically to Jon’s needs at the time, and the way in which it was developed didn't allow for easy addition or deletion of new cameras, equipment, tasks, or projects. We saw how much the JonApp had helped Jon and wanted to expand its abilities so that it could be used by any worker and supervisor in the world, where they could add whatever tasks and projects they needed.",
        "`TaskTime is a powerful combination of task manager and time clock. TaskTime features two sides, the supervisor and user side. The supervisor is able to login and create both projects, representing (if needed) jobs with varying pay rates, and tasks within them for the user. Then, when the user logs into their account on a tablet or portable computer, they are able to see, very intuitively, the tasks they are assigned for the day. Using the program's built-in text-to-speech options (alleviating the need for a screen reader), the user can check off their tasks, automatically recording the amount of time for that activity. In accordance with SourceAmerica’s design prompt, TaskTime also works as a time clock. When users check into their project, or begin the tasks associated with it, a clock will automatically start. They are able to pause the clock for breaks and stop it when they are done for the day or have completed all of their tasks. The supervisor is then able to see a report of the time the user was working and calculate their pay accordingly. Because TaskTime is based on the cloud, it is highly scalable, and unlike the JonApp, can be used by thousands of people at the same time. Tasktime’s design is ingeniously simple in the way it displays and organizes information in order to make it as accessible as possible to people with a wide range of abilities.",
      ],
    },
  ]}
/>

<ShowcaseOld
  name="WaterWand"
  subtitle="WaterWand is an all-in-one mobile water quality monitoring system designed specifically for the nonprofit environmental organization, Surfrider. WaterWand provides an inexpensive and easy-to-use solution for water quality monitoring of oceans, lakes, and rivers. Using WaterWand, environmental nonprofits like Surfrider will be able to monitor the health of aquatic ecosystem, and take action in preserving local ecology and aquatic life. Waterwand was a entrant in the Lexus EcoChallenge."
  revealLink="https://youtu.be/aVFVqsKF4w0"
  heroImage="/src/lib/assets/waterwand.jpg"
  galleryImages={[
    "/src/lib/assets/waterwand1.png",
    "/src/lib/assets/waterwand2.png",
    "/src/lib/assets/waterwand3.png",
  ]}
  specifications={[
    {
      title: "The Problem",
      items: [
        "Oceans, the epicenter of global warming, absorb about one-third of the 22 million tons of carbon dioxide per day that humans send into the atmosphere. Oceans were 0.17 ℃ warmer in 2017 than in 2000. This warming trend and resulting sea level rise is expected to dramatically accelerate this century. Already, the average surface ocean pH has dropped by 0.1 unit, a 25% increase in acidity. Warmer ocean temperatures cause mass coral bleaching, resulting in the starvation, shrinkage and death of the corals that support the thousands of species that live on coral reefs. Rising sea levels also threaten to drown wetlands and estuaries, resulting in steep declines of shorebird populations. The escalating effects of global warming on water ecosystems will require close monitoring of water quality indicators to be able to develop proactive actions that mitigate the effects of climate change.",
      ],
    },
    {
      title: "Our Solution",
      items: [
        "The WaterWand’s electronics consist of eight major components: the AdaFruit bluetooth Arduino, a circuit board, a 9V battery, a power supply converter, and sensors for pH, turbidity, salinity, and temperature. The bluetooth Arduino was soldered onto the circuit board in order to provide more analog and digital I/O ports which give us the capability to add more sensors and upgrade the system in the future. The 9V battery was wired to the power supply converter and a rail on the circuit board, converting the 9V from the battery into the 5V used by the Arduino and the pH and turbidity sensors. The salinity and temperature sensors use 3.3V, which are provided by the Arduino. The output voltages of the turbidity and temperature sensors are higher than voltage taken by the Arduino. For those two sensors, we ran their outputs through resistors to adjust the voltage. Furthermore, the pH, turbidity, and salinity sensors all provided analog outputs, and were wired to analog input pins on the circuit board.",
      ],
    },
    {
      title: "Software and Web Design",
      items: [
        "An iOS and Android compatible mobile app allows volunteers to collect and view WaterWand data. The WaterWand automatically connects to the app via Bluetooth Low Energy to send live sensor readings, which can be collected and analysed even in remote areas without internet access. Once data is collected and the phone is connected to the internet, the geotagged data is uploaded to the WaterWand cloud database.",
        "The WaterWand Web App displays data collected by volunteers across the country, synced from the central WaterWand cloud database. Users can view overall trends in data through automatically created charts. Data can be exported into a spreadsheet for further analysis. The WaterWand Web App also displays the location of all data points collected, providing an easy interface to view data.",
      ],
    },
    {
      title: "Partnership with Surfrider Foundation",
      items: [
        "Our team is working with the Surfrider Foundation, a nonprofit organization that focuses on water quality, beach access and protection, and sustaining marine and coastal ecosystems. With over 50,000 members and 70 chapters, Surfrider has a nationwide impact. The Portland chapter of Surfrider operates a variety of programs. We are working with Surfrider’s Blue Water Task Force, a water quality testing initiative that uses volunteers at the Oregon coast to monitor water quality. The data is used to determine if the water is healthy for local wildlife and visitors or whether action needs to be taken to improve water quality. After understanding the issues most critical to Surfrider, our team proposed the idea of the WaterWand. Customer feedback resulted in many design iterations.",
      ],
    },
  ]}
/>

<ShowcaseOld
  name="AbleMail"
  subtitle="AbleMail is an email client that works to remove the accessibility barriers that current email clients present for people with cognitive disabilities. AbleMail was a winner of the Congressional App Challenge."
  revealLink="https://youtu.be/N98phJeMobU"
  heroImage="/src/lib/assets/ablemail.jpg"
  galleryImages={["/src/lib/assets/ablemail2.png"]}
  specifications={[
    {
      title: "Summary",
      items: [
        "Email is a crucial tool for workplace communication and collaboration; however, current email clients present accessibility barriers for people with cognitive disabilities. For example, Jon, our Subject Matter Expert (SME), is unable to use email independently. Any job related communication, such as changes to his work schedule, must be emailed to his job coach or his mother who handle the logistics of his employment. AbleMail features a visually simple interface so Jon can (1) comprehend, (2) respond, and (3) compose emails independently. Since Jon struggles with a slow reading rate, text-to-speech capability converts the text of an email into audible words to improve email comprehension. AbleMail provides large and colorful icons that allow Jon to respond to emails with customized pre-written responses. Under AbleMail settings, icons and written responses can easily be changed and new ones added. Lastly, AbleMail allows Jon to compose emails through dictation and to attach an audio clip of his recorded response. AbleMail empowers Jon to communicate with his employer by email, thereby increasing his independence, ownership of his work, privacy, and self-esteem.",
        "AbleMail was a winner of the Congressional App Challenge!",
      ],
    },
    {
      title: "The Design",
      items: [
        "From the home page, the user can all of the features that AbleMail offers, including text-to-speech, voice recognition, voice emails, quick responses, a help button, as well as the large icons and simplified design. Every button and bit of text is equipped with text-to-speech, while the voice recognition feature is enabled while composing an email or when the user clicks on the voice command button. The user can use voice commands to navigate AbleMail, such as composing emails and reading emails. When composing an email, AbleMail uses voice recognition to write the email, but in case the voice recognition goes awry, an audio clip of the spoken email is also included in the sent message. Quick responses is even easier, as these customizable icons makes it so that the user only needs to click an icon to be able to respond to an email. The help button, found when the user opens an email, allows the user to forward an email to a trusted person to be able to help them further.",
      ],
    },
  ]}
  awards={[
    {
      title: "Congressional App Challenge Winner",
      description:
        "The Congressional App Challenge is the most prestigious prize in student computer science. The Congressional App Challenge is an annual competition where middle and high school students create and submit their own software applications (apps) to promote interest in computer science and STEM education. Winners have their apps showcased in the U.S. Capitol and are invited to a special event called #HouseofCode to celebrate their achievements.",
    },
  ]}
  publicity={[
    {
      title: "Congressional App Challenge",
      description:
        "2020 AbleMail Wins Rep. Blumenauer’s (OR-03) 2019 Congressional App Challenge",
      link: "https://www.congressionalappchallenge.us/19-OR03/",
    },
  ]}
/>

<ShowcaseOld
  name="JonApp"
  subtitle="The JonApp is a task oriented app that supports individuals with cognitive or developmental disabilities. It helps them gain independence and become more efficient in the workplace. It was designed for Jon, an individual who works at Catlin Gabel organizing media equipment, and has cognitive disabilities. The Jon App was national winner of the Source America Design Challenge and the Congressional App Challenge."
  revealLink="https://youtu.be/g7BFv5qU5dA"
  heroImage="/src/lib/assets/jonapp.jpg"
  specifications={[
    {
      title: "Details",
      items: [
        "The JonApp is a task oriented app that supports individuals with cognitive or developmental disabilities. It helps them gain independence and become more efficient in the workplace. It was designed for Jon, an individual who works at Catlin Gabel organizing media equipment, and has cognitive disabilities.",
        "The JonApp was a national winner of the Congressional App Challenge."
      ],
    },
  ]}
  awards={[
    {
      title: "Congressional App Challenge Winner",
      description:
        "The Congressional App Challenge is the most prestigious prize in student computer science. The Congressional App Challenge is an annual competition where middle and high school students create and submit their own software applications (apps) to promote interest in computer science and STEM education. Winners have their apps showcased in the U.S. Capitol and are invited to a special event called #HouseofCode to celebrate their achievements.",
    },
  ]}
/>

<ShowcaseOld
  name="WashPod"
  subtitle="WashPod provides off-the-grid and transportable laundry and shower facilities to the previously houseless population.  WashPod was a winner of the Lexus Eco Challenge."
  heroImage="/src/lib/assets/washpod.jpg"
  galleryImages={["/src/lib/assets/washpod2.jpeg", "/src/lib/assets/washpod3.jpeg"]}
  specifications={[
    {
      title: "General",
      items: [
        "WashPod provides off-the-grid and transportable laundry and shower facilities to the previously houseless population. Currently, there are communities of small pods around Portland, Oregon, which provide shelter for the previously houseless while they search for jobs and homes. However, the lack of laundry facilities often makes it difficult for members to make themselves presentable for job interviews and make a good impression in the world. Poor hygiene might impose a bad impression onto an employer, causing an otherwise qualified community member to lose a great opportunity. WashPod seeks to remove that negative factor by allowing members to easily clean themselves and their clothes. WashPod is installed at the Right 2 Dream Too (R2D2) pod village, a non-profit organization that provides a place for Portland's unhoused community to sleep.",
        "WashPod was a winner of the Lexus EcoChallenge!"
      ],
    },
    {
      title: "Environmentally Friendly",
      items: [
        "The first WashPod prototype was built by our Community Engineering team. A group of 10 students worked to design, fundraise for, and build the first WashPod.",
        "WashPod uses a unique hybrid power generation system to maximize efficiency and sustainability while remaining affordable.",
        "WashPod also uses a custom built graywater filtration system to minimize its impact on the environment. This purified wastewater will be used on-board to water a hydroponics garden, and will provide sustainably sourced food to WashPod's community."
      ]
    },
    {
      title: "Mobile",
      fullWidth: true,
      items: [
        "WashPod was engineered for mobility and reliability, and only uses the most reliable and safe power sources and construction materials.",
        "WashPod can be attached to any vehicle capable of towing at least 7000 pounds (this estimate is just to ensure that you are on the safe side)."
      ]
    }
  ]}
  awards={[
    {
      title: "Lexus Eco Challenge Winner",
      description:
        "The Lexus Eco Challenge is a STEM-focused contest for grades 6–12 that gets students involved in an environmental issue that affects their community, to use their critical-thinking and research skills to come up with a solution, and to report on the results by way of an Action Plan.",
    },
  ]}
  publicity={[
    {
      title: "Oregon Live",
      description: "Portland Teens Win $10,000 Prize for Pod-House Power Invention",
      link: "https://www.oregonlive.com/business-watch/2017/02/portland_teens_win_10000_prize.html"
    }
  ]}
/>

<ShowcaseOld
  name="JuiceBox"
  subtitle="JuiceBox is an efficient and sustainable way to provide electricity to off-the-grid, portable pods for previously homeless people. The JuiceBox was a winner of The Lexus Eco Challenge."
  revealLink="https://youtu.be/amtRkygxOKY"
  heroImage="/src/lib/assets/juicebox.jpg"
  galleryImages={["/src/lib/assets/juicebox2.jpeg"]}
  specifications={[
    {
      title: "The Need",
      items: [
        "Portland has a large homeless community. A houseless person, unlike a homeless person, is someone who lives in a safe, insulated shelter, but still lacks modern necessities like electricity, electric light, running water, and most importantly a permanent home. Organizations have built communities of small pods to give these citizens permanent shelter and safety. However, these communities lack power. We install JuiceBoxes into these pods to give these people light and energy, which can be used to charge their phones, (which are crucial when searching for employment. Our team has already installed 80 JuiceBoxes. JuiceBox provides green, efficient, and sustainable electricity for off-grid shelter pods for houseless individuals.",
        "JuiceBox was a winner of the Lexus Eco Challenge."
      ],
    },
    {
      title: "What's Inside?",
      items: [
        "Each shelter 'pod' is equipped with a 100W solar panel that delivers power to the JuiceBox, mounted inside.",
        "The power of the sun is harnessed to charge an 18 AH 12V battery. Batteries are recycled from FIRST Robotics teams.",
        "This power can then be used to power devices that plug into a wall outlet  (120V AC, 300W max) or 12V DC automotive accessory socket.",
        "The battery also powers a bright LED light bar mounted on the front of the JuiceBox, perfect for illuminating rooms at night, and extending the day of the user.",
        "https://docs.google.com/document/d/1dkl1BTMVWPNDj8O_7_XOdcQgSClkZFcNXvsn_5skLJs/edit?tab=t.0",
        "https://docs.google.com/document/d/1Dxr3EZfPzI-mTJN99RsQm80FbKY1oBDs9-HLk_v7V2I/edit?tab=t.0",
        "https://docs.google.com/spreadsheets/d/1uYQPRIudy3qsiiPXzOlipdBTd7kjSMQbZC_Jc5LHMPE/edit?gid=0#gid=0",
        "https://drive.google.com/file/d/0B32Iq3pxTogMOTR1WHd0MVNfeWc/view?resourcekey=0-HWNsa0xAqsfsVFdR6_ax2w",
        "https://drive.google.com/file/d/0B32Iq3pxTogMMUtBS2k1WVFobzA/view?resourcekey=0-CwnoBSEB5CkXopWW-PDZVQ"
      ]
    }
  ]}
  awards={[
    {
      title: "Lexus Eco Challenge Winner",
      description:
        "The Lexus Eco Challenge is a STEM-focused contest for grades 6–12 that gets students involved in an environmental issue that affects their community, to use their critical-thinking and research skills to come up with a solution, and to report on the results by way of an Action Plan.",
    },
  ]}
  publicity={[
    {
      title: "Willamette Week",
      description: "High School Students' Invention Is Providing Power to Portland Homeless",
      link: "https://www.wweek.com/culture/2017/03/09/high-school-students-invention-is-providing-power-to-portland-homeless/"
    },
    {
      title: "Oregon Live",
      description: "Portland teens' solar device gives electricity to homeless",
      link: "https://www.oregonlive.com/portland/2017/03/high_school_students_provide_j.html"
    }
  ]}
/>

<ShowcaseOld
  name="ScumBot"
  subtitle="ScumBot was designed to fight the common problem of eutrophication, where an excessive amount of nutrients and demand for biological oxygen depletes resources in an ecosystem, therefore killing off life in the area. In response, the Catlin Gabel InvenTeam created a fleet of autonomous robots to address this problem."
  heroImage="/src/lib/assets/scumbot.jpeg"
  galleryImages={["/src/lib/assets/scumbot2.jpeg"]}
  specifications={[
    {
      title: "Details",
      fullWidth: true,
      items: [
        "The beginnings of the Catlin Gabel InvenTeam and community engineering can be traced back to Sunriver, Oregon, where residents disliked how local Aspen Lake was infested with rotting, unattractive, and smelly duckweed. Simultaneously, Catlin engineering students discovered the Lemelson-MIT national InvenTeams program, an annual grant given to 15 high school groups every year to pursue projects in STEM fields. Thus, we combined the two interests to pursue ScumBot, a low-cost and low-maintenance aquatic Roomba designed to skim and remove aquatic surface vegetation such as duckweed and algae from small lakes and ponds.",
        "ScumBot was designed to fight the common problem of eutrophication, where an excessive amount of nutrients and demand for biological oxygen depletes resources in an ecosystem, therefore killing off life in the area. In response, the Catlin Gabel InvenTeam created a fleet of autonomous robots to address this problem. The design of ScumBot contains two conveyor belts, the first of which collects the duckweed, while the other holds and drains the material before dumping it onto a designated location on shore.",
        "Scumbot also offers a substantial reduction in the cost of removing the vegetation in comparison with the other methods of removal that currently exist. With this invention, we are able to serve a niche in the market for both small bodies of water and for bodies of water whose ecosystems are fragile or protected. ScumBot is also substantially less expensive than other methods of fighting eutrophication, the likes of which usually cost hundreds of thousands of dollars, while ScumBot only cost around $10,000 per robot. Our invention would be the first in a new category of inexpensive environmentally friendly yet effective methods for removal of surface vegetation."
      ],
    }
  ]}
  awards={[
    {
      title: "Recipient",
      description: "MIT InvenTeam Grant: The InvenTeam initiative, created by the Lemelson-MIT Program, offers an unparalleled opportunity for high school students to cultivate their creativity and experience invention. InvenTeams are teams of high school students, educators, and mentors which receive grants of up to $7,500 to invent technological solutions to real-world problems. Each InvenTeam chooses its own problem to solve. The application process occurs in two stages.",
    },
  ]}
  publicity={[
    {
      title: "Oregon Live",
      description: "Catlin Gabel School team gets $10,000 grant for ScumBot project",
      link: "https://www.oregonlive.com/north-of-26/2013/10/catlin_gabel_school_team_gets.html"
    }
  ]}
/>

<ShowcaseOld
  name="WaterTrotter"
  subtitle="Water Trotter was designed with an eye for utilizing easy to get and accessible resources, with the intent of not limiting usage due to a lack of materials. Another upside of Water Trotter is that it uses an ultraviolet purification lamp, placed in between the two tires and so that when the tires rotate, it powers the generator to run the UV lamp. The generated light kills the tiny invisible bacteria in the water, thus purifying the water."
  heroImage="/src/lib/assets/watertrotter.png"
  specifications={[
    {
      title: "Details",
      fullWidth: true,
      items: [
        "After receiving the Lemelson-MIT InvenTeams grants last year to design and implement ScumBot, known colloquially as an aquatic Roomba, we decided to expand the Catlin Gabel InvenTeam this year beyond the constraints of a single project. So when a group of Catlin Gabel InvenTeam students found out about the Clean Tech Challenge 2015, we were determined to submit our own project for engineering and philanthropy.",
        "The theme of the challenge this year was “Feed the World,” so in response we created Water Trotter, a product that transports water in developing countries in a cost effective way. Out of 350 teams competing for the Clean Tech Challenge, we placed first and won a $10,000 grant to help boost the project to achieve its fullest potential.",
        "Water Trotter was designed with an eye for utilizing easy to get and accessible resources, with the intent of not limiting usage due to a lack of materials. Another upside of Water Trotter is that it uses an ultraviolet purification lamp, placed in between the two tires and so that when the tires rotate, it powers the generator to run the UV lamp. The generated light kills the tiny invisible bacteria in the water, thus purifying the water. The process of turning the tires not only helps with providing clean drinking water, but also with adding potable washing material for cleaning dishes and potable cooking water as well.",
        "We intend to focus our development in a town called Gojo located in the Jeldu region of Ethiopia. We expect that the solution we develop will apply broadly throughout the developing world, however, Gojo is a prime example of the interaction of food and clean water scarcity and the negative effects upon the population. In Gojo, people walk up to five miles every day to fill up jerry cans, the average mode of transporting water in Africa, that weigh over forty pounds (40 lbs) when full. Women generally conduct this hilly trek before the sun rises in order to collect (dirty) water for themselves or their families. By the time they return home, there isn’t time or fuel to boil the water so they use the water in their food and to drink even while it still contains harmful bacteria."
      ],
    }
  ]}
  awards={[
    {
      title: "1st Place",
      description: "Clean Tech Challenge",
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