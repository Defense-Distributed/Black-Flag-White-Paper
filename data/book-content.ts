interface Figure {
  id: string
  number: number
  caption: string
  position: string
}

interface Reference {
  id: string
  number: number
  text: string
  url: string
}

interface Chapter {
  title: string
  content: string
  figures: Figure[]
}

interface BookContent {
  title: string
  chapters: Chapter[]
  references: Reference[]
}

export const bookContent: BookContent = {
  title: "Black Flag White Paper",

  chapters: [
    {
      title: "",
      content: `
        When Zarathustra's three apes founded The Gatalog in June of 2021, they did not yet know they had killed Jstark.[ref:1] Their founding manifesto was a confused but earnest refutation of digital rights management (DRM) written for Ammoland.[ref:2]

        On August 25, 2021, they got the first test of these values when Everytown sent a take-down notice to DEFCAD for the removal of three Gatalog files.[ref:3]

        Joined by FPC, our groups quickly organized to fight the first federal intellectual property claim in the history of 3D2A.

        It would not be the last.
      `,
      figures: [],
    },
    {
      title: "Introduction",
      content: `
        Exactly one year into the Everytown litigation, the loudest and largest of Zarathustra's apes made dueling copyright statements to DEFCAD:

        Doxxed by Odysee and embarrassed at having no role in the case, The Director of The Gatalog claimed the FGC-9 under a dignitary theory of copyright.[ref:4]

        Stun-locked and doing as he was told, The Secretary of The Gatalog quietly claimed the TacDaddy under an intellectual property theory of copyright.[ref:5]

        Let's examine these claims, their theoretical bases, and their innovative consequences.
      `,
      figures: [],
    },
    {
      title: "Copyright is Property",
      content: `
        Since 1710, authorial copyright has been considered a form of property in Anglo-American law.[ref:6] Though arguments for copyright protection still rely upon moral claims of an author's inalienable, natural right to reap the fruits of his labor, the demands of early English literary commerce and the modern publishing trade have produced a readily assignable, temporary property right.[ref:7]

        Because The Gatalog pretends to have no economic interest in maintaining copyright, we will address only their moral and non-economic property claims.
      `,
      figures: [],
    },
    {
      title: "The Dignitary Theory",
      content: `
        Though the property-based view of copyright was settled by Donaldson v. Becket (1774), there remains a traditional line of argument in support of copyright as a personal right based on ideas of dignity.[ref:8] This dignitary view includes reputational dimensions (distortions of an author's text are reflections of the author) and communicative dimensions (authorship is a right of public address), and is much more established in European law, though the U.S. became a party to the Berne Convention in 1989.[ref:9][ref:10]

        To better understand The Gatalog's claim of dignitary harm, we can make a comparison to libel, which was the group's intention in developing and promoting the "FEDCAD" meme.[ref:11] When Gatalog Command first changed their minds about the open-source status of their files, they chose to fight unauthorized republication of their property as a reputational offense.

        A criminal threat.[ref:12] But we at least see a formula and principle of proportionality at work.[ref:13] We read: Because I own the FGC-9, you harm my reputation by not respecting my control. As repayment, I will harm DEFCAD's reputation.

        Here we run into our first problem.

        Suppose DEFCAD pursued reputational damages for the FEDCAD libel. Does that mean the right being vindicated is a property right? The traditional view of libel is as a personal action, and personal actions at common law are not assignable.[ref:14] DEFCAD could not transfer ownership of its legal claim to a third-party plaintiff in Florida, for example. Likewise, a dignitary theory of copyright only describes the unassignable, personal rights of an author. Though the creator in Figure 1 might look elsewhere to defend his moral rights, e.g. the Visual Artists Rights Act of 1990 (VARA), he makes his claim to support a property right.[ref:15]

        But does The Gatalog own the FGC-9 in the first place?
      `,
      figures: [
        {
          id: "fig-1",
          number: 1,
          caption: "Private intimidation",
          position: "after:A criminal threat",
        },
      ],
    },
    {
      title: "The Intellectual Property Theory",
      content: `
        A property right means a right to "exclusive use" which includes the right to control commercial use. Though eighteenth-century authors may have had a common law right of property in their physical manuscripts and even printed, paper copies, it took another century of philosophical and legal work to expand this right to encompass an author's ideas.[ref:16]

        Today, copyright is an entitlement to an intangible object.

        An owner's entitlement is enforced as a universal right and is understood by terms like "theft" and "piracy."

        These are the terms of an official, public ideology that borrows heavily from Locke's natural rights theory of property and the labor theory of value.[ref:17] Modern copyright is described as existing independently of the law, and yet, regardless of romance, it is entirely a creature of federal statute.[ref:18] This has interesting consequences for our discussion.

        When The Gatalog released the TacDaddy under a Creative Commons license in 2022, they were not giving it away. Creative Commons licenses are copyright licenses.[ref:19] When you use one, you (try to) reserve legal rights in your work. This "some rights reserved" approach to publication is often represented as a scale, where public domain licenses are the most "open" and full copyright is the least.[ref:20] Here we see the TacDaddy's chosen license:

        The file may be free in terms of price but it is not open content in any meaningful sense. It still invokes copyright to restrict a user's freedom to modify or reuse the work for any purpose. This is why Creative Commons licenses are neither free nor open source software (FOSS) licenses. They are copyright licenses that merely reproduce the commodity form and expand the scope of intellectual property.
      `,
      figures: [
        {
          id: "fig-2",
          number: 2,
          caption: "TacDaddy license",
          position: "after:Here we see the TacDaddy's chosen license:",
        },
      ],
    },
    {
      title: "Creative Commons vs. Open Source",
      content: `
        Gun printing began with FOSS licenses because they invert copyright law.[ref:21] To frustrate state and world government attempts to control 3D gun files, Defense Distributed used permissive academic licenses to grant as many rights in its files as possible.[ref:22] We see this purpose of inversion in the preamble of the GPL v1.[ref:23]

        We see it in the symbolic violence of the "copyleft" sign and the mantra "all rights reversed".[ref:24]

        Before 2022, we could at least say The Gatalog had made a category mistake. Perhaps when reading the licenses of early 3D gun files, they misunderstood the purpose these served, which was as a hack. FOSS licenses use the techniques and language of corporate liberalism to fight international arms control. After 2022, The Gatalog began to let the folk meanings of these legal terms control their thinking. Worse, they laundered their acts of possessiveness as standard liberal moral and political positions. [ref:25]

        They began to believe copyright was real.
      `,
      figures: [
        {
          id: "fig-3",
          number: 3,
          caption: "Copyleft symbol",
          position:
            'after:We see it in the symbolic violence of the "copyleft" sign and the mantra "all rights reversed".[ref:24]',
        },
      ],
    },
       {
      title: "Federal CAD",
      content: `
        If you're not an open-source organization, why even use a copyright license?

        Why not just reserve your copyright and derivative rights entirely? In December of 2023, The Gatalog did just that and registered their files with the U.S. Copyright Office.[ref:26] The SF5, Amigo Grande and P99 are the very first examples of a new breed of federally registered guncad file.

        So, to recap: Ten years into the revolution, in the name of resisting traceable firearms, gun registration and confiscation, we... register our design files with the federal government to police unauthorized reproductions.

        But the message is beyond parody. A Gatalog copyright says: We grant users no rights at all. The use of our files isn't your right but rather our mercy. One term for this innovation might be "protecting property rights" and another might be "rights management." But the best one is "gun control."

        And here the transition is complete.[ref:27] Without JStark's leadership, his disciples formed a gun control organization in less than three years. At least we understand their position. Yet something is unresolved. A deeper problem remains. At first, we can only hear it whisper:

        Does federal registration establish an enforceable intellectual property in these files?

        Are 3D gun files even within the scope of copyright?
      `,
      figures: [],
    },
    {
      title: "But Is It Art?",
      content: `
        U.S. copyright protects works of "applied art" and does not protect works of "industrial design".[ref:28] In a report prepared by the House Judiciary Committee accompanying the Copyright Act, Congress sought to "draw as clear a line as possible between [the two]."[ref:29] Incorporating Mazer v. Stein (1954), and the concept of separability, Congress confirmed that even though the three-dimensional shape of an industrial product "may be aesthetically satisfying and valuable, the Committee's intention is not to offer it copyright protection."[ref:30]

        Since 1976, only the "physically or conceptually" separable artistic elements of designs for useful objects could be protected by copyright. Where no separation is possible, cases like Apple Computer v. Franklin (1992) say that idea and expression have "merged".[ref:31] In Star Athletica (2017), the Supreme Court introduced a two-part test for separability:

        "... an artistic feature of the design of a useful article is eligible for copyright protection if the feature (1) can be perceived as a two- or three-dimensional work of art separate from the useful article and (2) would qualify as a protectable pictorial, graphic, or sculptural work either on its own or in some other medium if imagined separately from the useful article."[ref:32]

        Let's see how this all works in practice.[ref:33]
      `,
      figures: [],
    },
    {
      title: "Creative Objects",
      content: `
        Purely artistic physical objects will be protected by copyright as sculptural works.

        A breakthrough new gun is not such an object, though it can be protected by patent (if you don't share it first).[ref:34] Just remember, copyright is not a "game of chess in which the public can be checkmated."[ref:35]

        The elements of the design of this trombone player (Figures 4 and 5), who is not based on anyone, were developed without regard to utilitarian pressures or practicalities.[ref:36] It is a work of applied art protected by copyright. Because of this, a 3D scan of the sculpture does not create a new copyright. But the scan makes a copy of the creative object and this is what modern copyright is supposed to regulate. We will need to get permission from the rightsholder to scan or print the sculpture.
      `,
      figures: [
        {
          id: "fig-4",
          number: 4,
          caption: "Copyrightable sculpture of a trombone player",
          position: "before:The elements of the design of this trombone player",
        },
        {
          id: "fig-5",
          number: 5,
          caption: "3D scan not protected by copyright",
          position: "before:The elements of the design of this trombone player",
        },
      ],
    },
    {
      title: "Useful Objects",
      content: `
        Purely useful objects in themselves are not subject to copyright. Models and 3D scans of these are so accurate that they are not recognized as artistic interpretations deserving of independent copyrights.[ref:37] The only questions arise when a useful object has some artistic element that may be separable.

        If we consider the FMDA DD17.2 model, we might apply the Supreme Court's test from Star Athletica. Can any of the features of the 3D frame be perceived as two- or three-dimensional works of art separate from the useful article?

        Would any of these features qualify as a protectable pictorial or sculptural work, either on its own or in some other medium?

        Most 3D gun models are products of industrial design.[ref:38]

        This is to say their design decisions are driven entirely by functional considerations. And we wouldn't want to take artistic liberties with pin hole placement now, would we?[ref:39]

        A popular exception to this rule is in the remix culture, where designs are often released with (separable) graphical or sculptural additions.
      `,
      figures: [
        {
          id: "fig-6",
          number: 6,
          caption: "DD17.2",
          position:
            "after:Would any of these features qualify as a protectable pictorial or sculptural work, either on its own or in some other medium?",
        },
        {
          id: "fig-7",
          number: 7,
          caption: "The incorporated anime design is separable",
          position:
            "after:A popular exception to this rule is in the remix culture, where designs are often released with (separable) graphical or sculptural additions.",
        },
      ],
    },
    {
      title: "Practicum",
      content: `
        We can apply what we've learned to a novel fact pattern. Say a creator releases a new design named Plastikov v4.[ref:40] He knows his build guide is copyrightable but that his 3D models are not. So he models a copyright statement into the assembly itself!

        According to Star Athletica, the only way to comply with the creator's copyright is to remove the potentially copyrightable elements of his design. In this case, the only copyrightable part of the design is the copyright statement. By gently removing this, we return the model to legal insignificance.[ref:41]

        Now we're the creator of two new works. One is a purely creative sculptural work with its own, new copyright.

        And the other, while not copyrightable, has heightened artistic value through determinate negation.[ref:42] We profit economically and morally, though not without some insider trading.[ref:43]
      `,
      figures: [
        {
          id: "fig-8",
          number: 8,
          caption: "Wat Do?",
          position: "after:So he models a copyright statement into the assembly itself!",
        },
        {
          id: "fig-9",
          number: 9,
          caption: "Do",
          position: "after:By gently removing this, we return the model to legal insignificance.[ref:41]",
        },
      ],
    },
    {
      title: "Why Call Them Gravediggers",
      content: `
        It's not because the Gatalog killed their founder and it's not the fact that they continue to fraternize with his assassin.[ref:44] It's because of the entirely normative, moralistic approach they take in JStark's absence; in the absence of any concrete politics. On the most basic level of analysis, it's easy to see why they got the copyright thing wrong. They don't know any attorneys. They don't put skin in the game or do commercial work.

        But they do practice a mendacious idealism. Their pleasure is in teaching "love of community" as fear of neighbor. Free Men Don't Ask, goes the old motto of defiance. To rely on copyright, this becomes: Free Men Must Ask, a preachment of timidity.

        They suppress files in the name of developing them. See the tired sermons justifying the impotence of their process; see the moral, tyrannical meaning of Deterrence Dispensed.[ref:45] They even employ some sperg named "Dr. Death," whose role, presumably, is to announce and administer the public burial of new projects.

        They endanger files in the name of protecting them. Copyrights are assets under bankruptcy law. The first lawsuit The Gatalog loses to Everytown, a bankruptcy trustee can enter the rights to the files for auction.[ref:46]

        Like most people with military or military industrial backgrounds, they're not capable of strategic thought.[ref:47]

        But their greatest offense is invoking the names of Locke and Jefferson as theater.

        They pretend that their hatred for the bold men of our time is instead an admiration for bolder men of past times and this is the definition of using the dead to bury the living.
      `,
      figures: [],
    },
    {
      title: "Ideology in Action",
      content: `
        "Ok," I hear you say, "the NEETs got copyright and 3D guns wrong. But what's the use of criticizing their primitive social norms?"

        Legal categories like "intellectual property" and "the author" serve ideological and social functions.[ref:48] They support the superstitious, grammatical conclusion that to every "deed" belongs a "doer."[ref:49]

        In Bernard Edelman's study of the history of photography and copyright, the law's substance is the presentation (and therefore constitution) of the commodity form of the subject.[ref:50]

        IP laws and discourse help us understand the mirror-structure of ideology and legal interpellation. Through copyright as imaginary relation, we recreate each other as "owners" of valuable "works."[ref:51] And this cycle of recreation via institutional recognition proceeds even to no particularly creative end.[ref:52] Behold the discourse of the university:

        If we reexamine Figure 10 in the terms of Figure 11, we see that beneath the appearance of dispensing knowledge The Gatalog's agent only produces more castration.[ref:54] The university's interest is in perpetuating its fantasy of itself. Its copyrights protect its master signifiers and they allow others to adopt these master signifiers as their own in a position of hysterical identification. Now, with identity and influence, we're at the heart of things.

        The Gatalog didn't need copyrights when it had influence.

        When it lost influence, it required them.
      `,
      figures: [
        {
          id: "fig-10",
          number: 10,
          caption: "The agent embodiment of knowledge",
          position:
            'after:Legal categories like "intellectual property" and "the author" serve ideological and social functions.[ref:48] They support the superstitious, grammatical conclusion that to every "deed" belongs a "doer."[ref:49]',
        },
        {
          id: "fig-11",
          number: 11,
          caption: "Lacanian Quadripode[ref:53]",
          position:
            'after:IP laws and discourse help us understand the mirror-structure of ideology and legal interpellation. Through copyright as imaginary relation, we recreate each other as "owners" of valuable "works."[ref:51] And this cycle of recreation via institutional recognition proceeds even to no particularly creative end.[ref:52] Behold the discourse of the university:',
        },
      ],
    },
    {
      title: "Epilogue",
      content: `
        
        
        One is much more of an artist than one knows.[ref:55]

        In deference to the community's need for profile work and because the law may one day change, I announce FEDCAD.com. Let it be a place for respecting and contacting all 3D gun rightsholders. Let it serve as a reminder that, in this movement, the only possible theft is property.

        ***

        "We Sail the 'See."[ref:56]

        Aye, sailors, I know you. But the first gun printers were pirates.[ref:57] I will not spare you, my sailors.

        Speak of IP and of "moral rights" but the sea hath taught me other rhetoric.[ref:58] There is an artist's right to destroy. My vandalism of the Plastikov is the only artistic part of it now. When I broke the printed, clay feet of its creator, that was called "fair use." And by this labor, I have re-authored the file.

        Ed Teach died nearly forty, The Commodore of Charles Town Bar. Well, my Spanish fort in the Fifth Circuit is stronger than any base he made in the Bahamas or the Outer Banks.

        Sail under this flag, young pirates and fear no copyright!

        The Royal Navy has no power here.


      `,
      figures: [],
    },
  ],

  references: [
    {
      id: "1",
      number: 1,
      text: '@marquis2baillon. "The Occult Designer." Acceleration.Party: https://acceleration.party/the-occult-designer/.',
      url: "https://acceleration.party/the-occult-designer/",
    },
    {
      id: "2",
      number: 2,
      text: 'Holladay, Alex, et al. "The Threat of DRM-Infused Home Gunbuilding." AmmoLand: https://ammoland.com/2021/04/the-threat-of-drm-infused-home-gunbuilding/#axzz8Zx5cfw61.',
      url: "https://ammoland.com/2021/04/the-threat-of-drm-infused-home-gunbuilding/#axzz8Zx5cfw61",
    },
    {
      id: "3",
      number: 3,
      text: "Everytown v. DEFCAD, 21-3079 (2d Cir. 2021).",
      url: "#",
    },
    {
      id: "4",
      number: 4,
      text: 'Wilson, Cody. "On Free Men and Freeman." LEGIO: https://ddlegio.com/on-free-men-and-freeman/.',
      url: "https://ddlegio.com/on-free-men-and-freeman/",
    },
    {
      id: "5",
      number: 5,
      text: "TacDaddy: https://defcad.com/library/5734c214-18b7-4a47-b1ea-2e9f469b11b6/",
      url: "https://defcad.com/library/5734c214-18b7-4a47-b1ea-2e9f469b11b6/",
    },
    {
      id: "6",
      number: 6,
      text: "Statute of Anne, 8 Ann. c. 19 (1710)",
      url: "#",
    },
    {
      id: "7",
      number: 7,
      text: "Stern, From Author's Right to Property Right.",
      url: "#",
    },
    {
      id: "8",
      number: 8,
      text: "Id. at 30.",
      url: "#",
    },
    {
      id: "9",
      number: 9,
      text: "Drassinower, Authorship as Public Address: On the Specificty of Copyright vis-à-vis Patent and Trade-mark.",
      url: "#",
    },
    {
      id: "10",
      number: 10,
      text: "Whitman, The Two Western Cultures of Privacy: Dignity Versus Liberty.",
      url: "#",
    },
    {
      id: "11",
      number: 11,
      text: "Original FEDCAD: https://defcad.com/library/7dea2d10-bf83-4b64-b145-d88395d51b2b/",
      url: "https://defcad.com/library/7dea2d10-bf83-4b64-b145-d88395d51b2b/",
    },
    {
      id: "12",
      number: 12,
      text: "Illinois Statutes Chapter 720 § 5/12-6",
      url: "#",
    },
    {
      id: "13",
      number: 13,
      text: "The creator's use of \"disavow\" is almost more interesting. Fetishistic disavowal is the interpretive key to all acts of FuddBusting. See Alenka Zupančič's Perverse Disavowal and the Rhetoric of the End.",
      url: "#",
    },
    {
      id: "14",
      number: 14,
      text: "A dissenting Justice Taylor in Millar v. Taylor (1762): \"[T]his action is merely vindictive: it is in personam; not in rem. Now there is no maxim in our law more clear and plain that this, 'that things in actions are not assignable.'\"",
      url: "#",
    },
    {
      id: "15",
      number: 15,
      text: "Intellectual products are often identified by reference to their authors, and their value may depend upon this identification. For VARA, see 17 U.S.C. § 106A.",
      url: "#",
    },
    {
      id: "16",
      number: 16,
      text: "For more on this, I recommend Oren Bracha's Owning Ideas.",
      url: "#",
    },
    {
      id: "17",
      number: 17,
      text: "Because natural rights language is the basis of this orthodoxy, it's worth noting that Locke himself did not extend his theory of property to the intangible, and that he wrote against the idea that copyright existed at common law. See Deazley: https://www.copyrighthistory.org/cam/commentary/uk_1690/uk_1690_com_97200712821.html. I note this not as a defender of Mr. Locke, but as the only guy in the movement who's read him.",
      url: "https://www.copyrighthistory.org/cam/commentary/uk_1690/uk_1690_com_97200712821.html",
    },
    {
      id: "18",
      number: 18,
      text: "The moral rights of the romantic figure of the autonomous creator are central to justifications of copyright.",
      url: "#",
    },
    {
      id: "19",
      number: 19,
      text: "From the horse's mouth: https://creativecommons.org/faq/#is-creative-commons-against-copyright",
      url: "https://creativecommons.org/faq/#is-creative-commons-against-copyright",
    },
    {
      id: "20",
      number: 20,
      text: "An example of this scale: https://goopenva.org/courseware/lesson/4433/overview",
      url: "https://goopenva.org/courseware/lesson/4433/overview",
    },
    {
      id: "21",
      number: 21,
      text: "DEFCAD on open source: https://defcad.com/opensource/",
      url: "https://defcad.com/opensource/",
    },
    {
      id: "22",
      number: 22,
      text: "Liberator's original license: https://github.com/RandyMcMillan/Liberator/blob/master/License.txt",
      url: "https://github.com/RandyMcMillan/Liberator/blob/master/License.txt",
    },
    {
      id: "23",
      number: 23,
      text: '"...our General Public License is intended to guarantee your freedom to share and change free software—to make sure the software is free for all its users... When we speak of free software, we are referring to freedom, not price...", GPL v1, February 1989, https://www.gnu.org/licenses/old-licenses/gpl-1.0.en.html',
      url: "https://www.gnu.org/licenses/old-licenses/gpl-1.0.en.html",
    },
    {
      id: "24",
      number: 24,
      text: 'Hill, Gregory (1965). Principia Discordia. "Ⓚ All Rites Reversed - reprint what you like."',
      url: "#",
    },
    {
      id: "25",
      number: 25,
      text: "I'm thinking of the naïve feminism on display in discussions of the RGB Crescent: https://defcad.com/library/65b285c7-a570-4522-8dee-7585733480c1/",
      url: "https://defcad.com/library/65b285c7-a570-4522-8dee-7585733480c1/",
    },
    {
      id: "26",
      number: 26,
      text: "The SF5 copyright registration: https://publicrecords.copyright.gov/detailed-record/36166774",
      url: "https://publicrecords.copyright.gov/detailed-record/36166774",
    },
    {
      id: "27",
      number: 27,
      text: 'The Deterrence Dispensed website banner has for years made this apology: "Please bear with us through this transition."',
      url: "#",
    },
    {
      id: "28",
      number: 28,
      text: "17 U.S.C. § 101",
      url: "#",
    },
    {
      id: "29",
      number: 29,
      text: "See, H.R.Rep. No. 1476, 94th Cong., 2d Sess. 55 (1976)",
      url: "#",
    },
    {
      id: "30",
      number: 30,
      text: "Id. at 55",
      url: "#",
    },
    {
      id: "31",
      number: 31,
      text: "Redditors will say Baker v. Selden, but Pamela Samuelson makes the case for Franklin in her Reconceptualizing Copyright's Merger Doctrine.",
      url: "#",
    },
    {
      id: "32",
      number: 32,
      text: "Star Athletica, L. L. C. v. Varsity Brands, Inc., 580 U. S. 405 (2017).",
      url: "#",
    },
    {
      id: "33",
      number: 33,
      text: "I owe the arrangement of the following section to Michael Weinberg's What's the Deal with 3D Printing and Copyright? https://defcad.com/library/324750ef-45e5-4de6-a3df-ef43905b04b5/",
      url: "https://defcad.com/library/324750ef-45e5-4de6-a3df-ef43905b04b5/",
    },
    {
      id: "34",
      number: 34,
      text: 'Pennock & Sellers v. Dialogue: "But if the public, with the knowledge and the tacit consent of the inventor, is permitted to use the invention without opposition, it is a fraud upon the public afterwards to take out a patent."',
      url: "#",
    },
    {
      id: "35",
      number: 35,
      text: "Morrissey v. Proctor & Gamble, 379 F.2d 675 (1st Cir. 1967)",
      url: "#",
    },
    {
      id: "36",
      number: 36,
      text: "If this model was based on a real person, the analysis would change.",
      url: "#",
    },
    {
      id: "37",
      number: 37,
      text: "See Meshwerks, Inc. v. Toyota Motor Sales U.S.A., Inc., 528 F.3d 1258 (10th Cir. 2008).",
      url: "#",
    },
    {
      id: "38",
      number: 38,
      text: "The great irony in our space is that *only* non-functional or videogame models are copyrightable.",
      url: "#",
    },
    {
      id: "39",
      number: 39,
      text: "See infra note 45.",
      url: "#",
    },
    {
      id: "40",
      number: 40,
      text: "Plastikov v4: https://defcad.com/library/3a0d7e3e-795b-49d1-b387-967cd9148fe2/",
      url: "https://defcad.com/library/3a0d7e3e-795b-49d1-b387-967cd9148fe2/",
    },
    {
      id: "41",
      number: 41,
      text: "This is not to say the model has no expressive content or value. It just can't be copyrighted.",
      url: "#",
    },
    {
      id: "42",
      number: 42,
      text: 'Here we have Zizek\'s famous "coffee without cream."',
      url: "#",
    },
    {
      id: "43",
      number: 43,
      text: "I adopt Baudrillard's meaning from his Conspiracy of Art.",
      url: "#",
    },
    {
      id: "44",
      number: 44,
      text: "DD2's promotion of Jake Hanrahan is like if the Jackson family promoted Martin Bashir after 2003.",
      url: "#",
    },
    {
      id: "45",
      number: 45,
      text: "Thread with creepy eugenics defense: https://tinyurl.com/ypusy84e On morality as tyranny, this post employs the most authoritarian formula in political philosophy: https://tinyurl.com/29zjp5c4",
      url: "https://tinyurl.com/ypusy84e",
    },
    {
      id: "46",
      number: 46,
      text: "Imagine Everytown (or me!) wielding your files against you – for the next 100 years.",
      url: "#",
    },
    {
      id: "47",
      number: 47,
      text: "The mistake is seeing the public domain as a loophole, instead of the objective.",
      url: "#",
    },
    {
      id: "48",
      number: 48,
      text: "See Foucault's What is an Author?",
      url: "#",
    },
    {
      id: "49",
      number: 49,
      text: "Nietzsche, Beyond Good and Evil, Part 1 – Aphorism #17.",
      url: "#",
    },
    {
      id: "50",
      number: 50,
      text: "See Edelman's Ownership of the Image.",
      url: "#",
    },
    {
      id: "51",
      number: 51,
      text: 'In Althusser, it is only through imaginary relations that we "live" our social relations as subjects.',
      url: "#",
    },
    {
      id: "52",
      number: 52,
      text: "Invariably, the loudest people in 3D2A have never developed or released anything.",
      url: "#",
    },
    {
      id: "53",
      number: 53,
      text: "Lacan, The Seminar of Jacques Lacan: The Other Side of Psychoanalysis (Book XVII).",
      url: "#",
    },
    {
      id: "54",
      number: 54,
      text: "Style points will be awarded for employing an actual castrato to do this.",
      url: "#",
    },
    {
      id: "55",
      number: 55,
      text: "Nietzsche, Beyond Good and Evil, Part V – Aphorism #192.",
      url: "#",
    },
    {
      id: "56",
      number: 56,
      text: "Common motto of 2nd gen 3D gun printers. A reference to Odysee.com.",
      url: "https://odysee.com",
    },
    {
      id: "57",
      number: 57,
      text: "In Drake's England, piracy was policy. So it was in the Texas Revolution. So it is at DEFCAD.",
      url: "#",
    },
    {
      id: "58",
      number: 58,
      text: "From Richard Brathwaite, Whimzies (London, 1631), quoted in Christopher Lloyd, The British Seaman, 1200–1860: A Social Survey (Rutherford, N.J.: Fairleigh Dickinson University Press, 1970), 74.",
      url: "#",
    },
  ],
}

