export const config = {
    opening: {
        menu: {
            items: [
                {
                    name: "Home",
                    path: "/",
                    type: "link"
                },
                {
                    name: "Services",
                    type: "dropdown",
                    items: [
                        {
                            key: 1,
                            name: "Influencers",
                            path: "/influencers"
                        },
                        {
                            key: 2,
                            name: "Developers",
                            path: "/developers"
                        },
                        {
                            key: 3,
                            name: "Community Management",
                            path: "/community-management"
                        }
                    ]
                },
                {
                    name: "About Us",
                    path: "#au",
                    type: "link"
                },
                {
                    name: "Projects",
                    path: "/projects",
                    type: "link"
                },
                {
                    name: "News",
                    path: "/news",
                    type: "link"
                },
                {
                    name: "Login",
                    type: "link",
                    path: "/influencers"
                },
                {
                    name: "Work With Us",
                    type: "link",
                    path: "/work-with-us"
                }
            ]
        },
        text: [
            "SOLVERSE DIGITAL",
            "All the services needed for cryptocurrency are now a single platform"
        ],
        toggle: {
            name: "Learn More",
            icon: "fas fa-angle-double-down"
        }
    },
    whatwedo: {
        header: "What we do ?",
        subHeader: null,
        items: [
            {
                key: 1,
                icon: "fas fa-palette",
                header: "Creative Design",
                type: "page",
                link: "/developers",
                subHeader: "Do you need a logo or a website? Our professional graphic and web designers will assist you with unique and creative logo and website designs suitable for your business"
            },
            {
                key: 2,
                icon: "fas fa-users",
                header: "Community management",
                type: "page",
                link: "/community-management",
                subHeader: "Looking for someone to manage your Discord and telegram groups? Our experienced community managers, who have worked on many projects before, will assist you."
            },
            {
                key: 3,
                icon: "fas fa-assistive-listening-systems",
                header: "Influencer Ads",
                type: "page",
                link: "/phenomena",
                subHeader: "Do you need promotional activities of social media influencers to promote your project? Our phenomena will prepare a detailed introduction for your project."
            },
            {
                key: 4,
                icon: "fas fa-check-double",
                header: "Listing Consultant",
                type: null,
                link: null,
                subHeader: "Want to be listed on CMC and CG? Our consultants will help you get listed as quickly as possible. We can also assist you with T2 CEX Listings with the best quotes."
            },
            {
                key: 5,
                icon: "fas fa-globe-americas",
                header: "Advertisements",
                type: null,
                link: null,
                subHeader: "Do you want to reach large audiences? We can provide you with TV and billboard advertisements, and we can also organize sponsorship activities with celebrities."
            },
            {
                key: 6,
                icon: "fas fa-balance-scale",
                header: "Branding and Marketing",
                type: null,
                link: null,
                subHeader: "Need help with branding and marketing? Thanks to our experienced consultants, we can assist you in the growth of your target audience and in your marketing efforts."
            }
        ]
    },
    aboutus: {
        header: "About Us",
        subHeader: "As Solverse Digital, our aim is to bring crypto money projects together with cryptocurrency exchanges and investors, to ensure that the projects grow in the global market, and to integrate cryptographic assets with companies from different sectors. Solverse, founded by Solverse Digital company, which includes Freelancers, Influencers and many companies, can easily solve all your questions with its expert staff, and provides you with low-cost quality services and makes you relax both economically and as a workforce. has emerged as a service platform that will give you professional support whenever you want and set out to leave behind all the service platforms you have seen before.",
        items: [
            {
                key: 1,
                header: "Mission",
                subHeader: "Our mission is to empower our customers to use the internet to its full potential by providing cost-effective, effective, custom design and marketing solutions."
            },
            {
                key: 2,
                header: "Vision",
                subHeader: "To be a global leader in providing the best and unique web design and marketing services to increase our clients' productivity and workforce."
            }
        ]
    },
    partners: {
        header: "BUSINESS PARTNERS",
        items: [
            {
                key: 1,
                logo: "http://api.anachronisticdigital.com/storage/image/627e6b1578bdf.svg"
            },
            {
                key: 2,
                logo: "http://api.anachronisticdigital.com/storage/image/627c897365651.png"
            },
            {
                key: 3,
                logo: "http://api.anachronisticdigital.com/storage/image/627c897cabed5.png"
            },
            {
                key: 4,
                logo: "http://api.anachronisticdigital.com/storage/image/627c89822cb98.png"
            },
            {
                key: 5,
                logo: "http://api.anachronisticdigital.com/storage/image/bilaxy.png"
            },
            {
                key: 5,
                logo: "http://api.anachronisticdigital.com/storage/image/coin.png"
            }
        ]
    },
    members: {
        header: "Our Members",
        items: [
            {
                index: 0,
                image: "http://api.anachronisticdigital.com/storage/image/6274a004b9b8e.png",
                name: "KASIM YILMAZ",
                id: "kasim_yilmaz",
                position: "CO-FOUNDER&CEO",
                description: "I have been managingI have been managing the Turkish market of blockchain projects for a long time. I have several years of experience in community management and digital marketing.",
                socials: [
                    {
                        key: 1,
                        name: "twitter",
                        socialMediaLink: "https://twitter.com/K4smylmz",
                        socialMediaIcon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        name: "instagram",
                        socialMediaLink: "https://www.instagram.com/kasm_ylmzz/",
                        socialMediaIcon: "fab fa-instagram y"
                    },
                    {
                        key: 3,
                        name: "telegram",
                        socialMediaLink: "https://t.me/K4sm_ylmz",
                        socialMediaIcon: "fab fa-telegram z"
                    },
                    {
                        key: 4,
                        name: "email",
                        socialMediaLink: "mailto:kasimyilmaz@solversedigital.com",
                        socialMediaIcon: "far fa-envelope"
                    }
                ]
            },
            {
                index: 1,
                image: "http://api.anachronisticdigital.com/storage/image/6274a00f52018.png",
                name: "EMRE DURMAZ",
                id: "emre_durmaz",
                position: "CO-FOUNDER",
                description: "I have been the manager of many projects and managed community affairs on behalf of Turkey. Now, with our team, we take the first step to make it more known and accessable for everyone.",
                socials: [
                    {
                        key: 1,
                        name: "twitter",
                        socialMediaLink: "https://twitter.com/eemreddurmazz",
                        socialMediaIcon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        name: "instagram",
                        socialMediaLink: "https://instagram.com/eemredurmazz?utm_medium=copy_link",
                        socialMediaIcon: "fab fa-instagram y"
                    },
                    {
                        key: 3,
                        name: "telegram",
                        socialMediaLink: "https://t.me/eemredurmazz",
                        socialMediaIcon: "fab fa-telegram z"
                    },
                    {
                        key: 4,
                        name: "email",
                        socialMediaLink: "mailto:emredurmaz@solversedigital.com",
                        socialMediaIcon: "far fa-envelope"
                    }
                ]
            },
            {
                index: 2,
                image: "http://api.anachronisticdigital.com/storage/image/6274a01a3297c.png",
                name: "SEYIT HAN",
                id: "seyit_han",
                position: "INFLUENCER MANAGER",
                description: "I have been working with influencers for almost a year. I have carried out advertising and various activities to increase the number of people both in Twitter and Instagram with well-known people.",
                socials: [
                    {
                        key: 1,
                        name: "instagram",
                        socialMediaLink: "https://instagram.com/seyithanbarut?utm_medium=copy_link",
                        socialMediaIcon: "fab fa-instagram y"
                    }
                ]
            },
            {
                index: 3,
                image: "http://api.anachronisticdigital.com/storage/image/6274a03953a58.jpg",
                name: "BATUHAN  YILMAZ",
                id: "batuhan_yilmaz",
                position: "CHIEF OPERATIONEL OFFICER",
                description: "I've been working on many projects as a coordinator. I have worked in many projects as a trainer and now I am giving some guidance to people in the crypo market. And I do this according to the certificates I have acquired.",
                socials: [
                    {
                        key: 1,
                        name: "twitter",
                        socialMediaLink: "https://twitter.com/lukasalvadorr",
                        socialMediaIcon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        name: "instagram",
                        socialMediaLink: "https://www.instagram.com/battylmz/",
                        socialMediaIcon: "fab fa-instagram y"
                    },
                    {
                        key: 3,
                        name: "telegram",
                        socialMediaLink: "https://t.me/Battylmz",
                        socialMediaIcon: "fab fa-telegram z"
                    },
                    {
                        key: 4,
                        name: "email",
                        socialMediaLink: "mailto:btylmz9@gmail.com",
                        socialMediaIcon: "far fa-envelope"
                    }
                ]
            },
            {
                index: 4,
                image: "http://api.anachronisticdigital.com/storage/image/6274a28ce5b27.png",
                name: "HALIL BALOTA",
                id: "halil_balota",
                position: "LISTING  MANAGER",
                description: "Hello, I am Halil Balota. I am 28. I was worked with some big projects as Listing Manager. I am working on cryptocurrency since 2019.",
                socials: [
                    {
                        key: 1,
                        name: "twitter",
                        socialMediaLink: "www.Twitter.com/HalilBalota",
                        socialMediaIcon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        name: "instagram",
                        socialMediaLink: "https://www.instagram.com/balotahalil/",
                        socialMediaIcon: "fab fa-instagram y"
                    },
                    {
                        key: 3,
                        name: "telegram",
                        socialMediaLink: "https://t.me/BalotaHalil",
                        socialMediaIcon: "fab fa-telegram z"
                    },
                    {
                        key: 4,
                        name: "email",
                        socialMediaLink: "mailto:halilbalota@anachronisticdigital.com",
                        socialMediaIcon: "far fa-envelope"
                    }
                ]
            },
            {
                index: 5,
                image: "http://api.anachronisticdigital.com/storage/image/62779fa7a88df.png",
                name: "OGUZ TURKAN",
                id: "oguz_turkan",
                position: "RESEARCH MANAGER",
                description: "I have been in the crypto money industry for about 2 years.nI now lead the project research team of Solverse Digital",
                socials: [
                    {
                        key: 1,
                        name: "twitter",
                        socialMediaLink: "https://twitter.com/oguzturkannn",
                        socialMediaIcon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        name: "instagram",
                        socialMediaLink: "https://www.instagram.com/ismiminarkasindayim/",
                        socialMediaIcon: "fab fa-instagram y"
                    }
                ]
            },
            {
                index: 6,
                image: "http://api.anachronisticdigital.com/storage/image/62778b488678b.png",
                name: "KAGAN CELIK",
                id: "kagan_celik",
                position: "BLOCKCHAIN DEVELOPER",
                description: "Since 2015, I have had the opportunity to work in projects and exchanges in the crypto money sector. I joined the  Solverse Digital team in March 2022 to assist with blockchain solutions.",
                socials: [
                    {
                        key: 1,
                        name: "telegram",
                        socialMediaLink: "https://t.me/mrkruff",
                        socialMediaIcon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        name: "email",
                        socialMediaLink: "mailto:mkc@anachronisticdigital.com",
                        socialMediaIcon: "far fa-envelope"
                    }
                ]
            },
            {
                index: 7,
                image: "http://api.anachronisticdigital.com/storage/image/62678a36ce6ff.png",
                name: "ALI UGUR LAFCI",
                id: "ali_lafci",
                position: "CHIEF TECHNOLOGY OFFICER",
                description: "I am an experienced software engineer who develops web and mobile applications. I offer reliable, performance and professional software solutions suitable for your needs.",
                socials: [
                    {
                        key: 1,
                        name: "telegram",
                        socialMediaLink: "https://t.me/aliugurlafci",
                        socialMediaIcon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        name: "email",
                        socialMediaLink: "mailto:aliugur@solversedigital.com",
                        socialMediaIcon: "far fa-envelope"
                    }
                ]
            }
        ]
    },
    footer: {
        links: [
            {
                name: "Home",
                path: "/",
                type: "link"
            },
            {
                name: "Services",
                type: "dropdown",
                items: [
                    {
                        key: 1,
                        name: "Influencers",
                        path: "/influencers"
                    },
                    {
                        key: 2,
                        name: "Developers",
                        path: "/developers"
                    },
                    {
                        key: 3,
                        name: "Community Management",
                        path: "/community-management"
                    }
                ]
            },
            {
                name: "About Us",
                path: "#au",
                type: "link"
            },
            {
                name: "Projects",
                path: "/projects",
                type: "link"
            },
            {
                name: "News",
                path: "/news",
                type: "link"
            },
            {
                name: "Work With Us",
                type: "link",
                path: "/work-with-us"
            }
        ],
        socials: [
            {
                key: 1,
                path: "https://twitter.com/SolverseDigital?t=rXMEcgj7jGsPpl-azU-Mfw&s=09",
                icon: "fab fa-twitter y"
            },
            {
                key: 2,
                path: "https://instagram.com/solverse_digital?igshid=YmMyMTA2M2Y=",
                icon: "fab fa-instagram y"
            },
            {
                key: 3,
                path: "mailto:hello@solversedigital.com",
                icon: "far fa-envelope y"
            },
            {
                key: 4,
                path: "https://t.me/Solversedigitall",
                icon: "fab fa-telegram y"
            }
        ],
        copyrights: "Copyrights 2022 Solverse Digital | All Rights Reserved."
    },
    socialaccounts: {
        header: "Social Media Followers",
        items: [
            {
                key: 1,
                id: "twitter",
                icon: "fab fa-twitter x",
                value: 0,
                followerCount: "1000",
                animationDuration: "8000"
            },
            {
                key: 2,
                id: "instagram",
                icon: "fab fa-instagram y",
                value: 0,
                followerCount: "1000",
                animationDuration: "8000"
            },
            {
                key: 3,
                id: "telegram",
                icon: "fab fa-telegram z",
                value: 0,
                followerCount: "1000",
                animationDuration: "8000"
            },
            {
                key: 4,
                id: "facebook",
                icon: "fab fa-facebook-f",
                followerCount: "1000"
            }
        ]
    },
    siteagreement: {
        acceptButtonText: "Accept",
        acceptButtonIcon: "far fa-check-circle margin-5",
        declineButtonText: "Refuse",
        declineButtonIcon: "fas fa-times margin-5",
        items: [
            {
                key: 1,
                icon: "fas fa-cookie-bite",
                items: [
                    {
                        key: 1,
                        header: "Solverse Digital Cookie Policy",
                        subHeader: "As Solverse Digital, we care about your security and with this Cookie Policy, we aim to briefly inform you, our dear visitors, about which cookies we use on our website, for what purpose, and how to change your cookie settings.In order to serve you better, please read this Cookie Policy to have brief information about what kind of personal data is collected for what purpose and how it is processed through cookies. For more information, you can take a look at our Privacy Policy or contact us without hesitation."
                    },
                    {
                        key: 2,
                        header: "What is a Cookie?",
                        subHeader: "Cookies are small files that are saved on users' devices so that they can use websites more efficiently. Since the information of users is being processed through cookies, users must be informed and their consent must be obtained in accordance with the Law on the Protection of Personal Data No. 6698.We also use various cookies in order to ensure that you, our dear visitors, can make the most of our website and improve the user experience of our dear visitors."
                    },
                    {
                        key: 3,
                        header: "Mandatory Cookies",
                        subHeader: "Mandatory cookies are cookies that enable the website to be usable by activating the basic functions of the website. The website will not function properly without these cookies."
                    },
                    {
                        key: 4,
                        header: "Performance Cookies",
                        subHeader: "Performance cookies are cookies that anonymously collect visitors' usage information and preferences regarding the website and thus enable the performance of the website to be improved."
                    },
                    {
                        key: 5,
                        header: "What are the Personal Data Processed with Cookies?",
                        subHeader: "Your identity (name, surname.) and contact (social media addresses, e-mail address.) information is provided by us through cookies, automatic or non-automatic methods, and sometimes analytics providers, advertising networks, search information providers, technology providers. It will be processed based on the condition of processing legitimate interests, within the framework and duration of the service and contractual relationship between us, by obtaining, recording, storing and updating from third parties such as"
                    },
                    {
                        key: 6,
                        header: "For What Purpose Are Cookies Used?",
                        subHeader: "Cookies are used on our website to ensure security by detecting suspicious activities, to increase functionality and performance in line with users' preferences, to develop and personalize products and services, to facilitate access to these services, and to fulfill contractual and legal responsibilities. In addition, there are advertising cookies and information sharing with third parties in order to bring users together with wider service providers."
                    },
                    {
                        key: 7,
                        header: "How are Cookies Managed?",
                        subHeader: "After all these explanations, the issue of which cookies will be used is left entirely to the free will of our users. You can manage your cookie preferences as soon as you step on our website by deleting or blocking them in your browser's settings, or you can change these settings at any time in the future. For more detailed information, you can take a look at our Privacy Policy or contact us via the e-mail address support@solversedigital.com."
                    }
                ]
            },
            {
                key: 2,
                icon: "fas fa-user-secret",
                items: [
                    {
                        key: 1,
                        header: "Solverse Digital Confidentiality Agreement",
                        subHeader: "In this contract, Solverse Digital, -https://solversedigital.com/ - will be given as information, user and influencer -user-, what guarantee will be given to this site.This site is solely responsible for maintaining the fees of its visitors. It avoids taking part in all the conditions of the internet environment, and it should be stated that the internet environment can never be fully provided.Respect your site rights and users any information written by the site. Only with an authorized Solverse official site can you be. The information in Solverse Digital consists only of information by users and no information is collected with their consent. The reason for the data developer is to take advantage of the latest innovations and knowledge in Solverse digital. The site cannot be completely finished on any site, on any site at any time, at any time from the internet, they cannot be targeted from any potential due to the illegal use of their use.The information to the Solverse Digital is not exhaustive. Includes those relating to and managed by websites provided by Solverse Digital tutorials. Information, products and services on these sitesIt's not played by Solverse Digital and is more disliked.The content published on the sites related to your Solverse digital channel and the content of the completed site. It cannot be held responsible for the content and Solverse problems on the linked sites.If the user has a website and does not have an Solverse link, solversedigital.com This e-mail address can be sent in a short time from a link on a site that can be sent from a web address to use JavaScript to view spam. link and related."
                    },
                    {
                        key: 2,
                        header: "Non-Personal and Compiled Information",
                        subHeader: "When you visit our site, we may record general information on your domain, such as the name of the Web page you logged into our site, the pages you visited on our Site, and how long you spent on each page. We use this information for internal analysis as well as to regularly monitor and improve our Site. We often use IP addresses (IP addresses are not linked to personally identifiable information) to analyze trends, administer the Site, track user movements and collect information for aggregate use."
                    },
                    {
                        key: 3,
                        header: "Personal information",
                        subHeader: "As a visitor to our site, you may choose to use the site to send us your personal information (e.g., your name, address, telephone number, e-mail address) when you submit a question through the site, register for or apply for a particular service. Except where your consent is given or required by law, every time you send your personal information using the site for a specific purpose, your information is only used for that purpose. When you send personal information to Solverse Digital through this site, you are deemed to have understood and accepted that this information may be transported outside national borders and stored and processed in another country that may not provide for laws similar to privacy protection agreements in your country.From time to time, we may send an e-mail announcing new Solverse Digital products and services. Except as stated above, Solverse Digital will not send you e-mails that you do not agree to receive. If you write your address information in an online form, you may receive mail from other third party companies. Solverse Digital is not responsible for these received mails and their contents.In some cases, you determine the amount of information you provide (eg, when sending information to us via the Site, you may choose to provide only an e-mail address for response rather than a telephone number or address). In some cases, we may ask you to provide information in the fields that are required to be filled, and in some cases optional fields. In such cases, you will not be able to benefit from this activity if the mandatory personal information is not provided for a certain activity."
                    },
                    {
                        key: 4,
                        header: "Sharing",
                        subHeader: "We may share non-personal aggregated information with our customers, partners and advertisers. The information compiled is not linked to any personal information that could help identify a person or Web page. Except as required by law or with your consent, we only share the personal information you provide through our Site with Solverse Digital partners and/or business partners working on our behalf."
                    },
                    {
                        key: 5,
                        header: "Data security",
                        subHeader: "In order to prevent unauthorized access, maintain data accuracy and ensure the correct use of information, we implement appropriate physical, electronic and managerial procedures that protect and secure the information we collect through the site. However, despite all its efforts, Solverse Digital cannot guarantee that your personal information cannot be obtained illegally from Solverse Digital systems, and if you use Solverse Digital's online services, you accept all risks and responsibility that may arise, including the risk of security vulnerability in our systems. Also, please note that Solverse Digital does not guarantee the public and third party communication networks that you send your personal information to Solverse Digital's site and has no control over these networks."
                    },
                    {
                        key: 6,
                        header: "Children's safety",
                        subHeader: "Protecting children's privacy is particularly important. For this reason, we never collect or organize information on our Site about anyone we know to be under the age of 18, and no part of our Site is designed to attract anyone under the age of 18."
                    },
                    {
                        key: 7,
                        header: "Linked sites",
                        subHeader: "This Site contains links that, when clicked, take you to another place within the document, to a completely different document, or to other Web sites not controlled by Solverse Digital. These linked Web sites may contain terms that differ from the privacy provisions set forth herein. Solverse Digital is not responsible for the compilation, use or disclosure of information collected through these Websites and Solverse Digital expressly and expressly disclaims any liability that may arise from such compilation, use or disclosure. Solverse Digital is in no way responsible for the problems that may arise during or after the access to the linked sites. The fact that the links of other sites are included in the Solverse Digital site does not mean that those sites are safe and you are completely responsible. When you click on the link, the user accepts that he has left the Solverse Digital area and after this stage, Solverse Digital has no responsibility in any way.Solverse Digital is not responsible for any direct or indirect damages, losses and expenses that may arise as a result of any errors, interruptions, delays in information transfer, computer viruses, line and electricity failures that may occur during the use of our site.Solverse Digital provides links and routers to websites maintained by third parties. However, it does not control the content of these sites and Solverse Digital does not guarantee against any damages that may arise from the use of these sites.Likewise, with or without the permission of Solverse Digital from other sites.Solverse Digital does not have any responsibility when a link is given to the Solverse Digital site, due to the structure resulting from the inability to control such links.Registered trademark, patent, intellectual and other property rights are reserved in Solverse Digital. A person and / or organization cannot use a certain part of our site on another WEB site, cannot link to another website, unless it has previously obtained the permission of Solverse Digital"
                    },
                    {
                        key: 8,
                        header: "Contract Changes",
                        subHeader: "This Privacy Policy is subject to change. Any changes to the Solverse Digital Privacy Policy will be announced on the site. All information sent to Solverse Digital through the site is subject to the terms and conditions of the Confidentiality Agreement as amended."
                    }
                ]
            },
            {
                key: 3,
                icon: "fas fa-assistive-listening-systems",
                items: [
                    {
                        key: 1,
                        header: "Terms of Use",
                        subHeader: "Dear visitor, please read this terms of use agreement carefully before visiting our website https://solversedigital.com. Your access to the site is entirely dependent on your acceptance of this agreement and your compliance with the terms set forth in this agreement. If you do not agree to any terms in this agreement, please terminate your access to the site. Please, if you continue to access the site, we will assume that you unconditionally and unconditionally accept the entire text of this agreement.The https://solversedigital.com website is managed by Solverse Digital, hereinafter referred to as the SITE. The Terms of Use of this site enter into force on the date of publication. The right to make changes belongs to Solverse Digital unilaterally, and all our users are deemed to have accepted these changes, which will be updated on the SITE."
                    },
                    {
                        key: 2,
                        header: "Security",
                        subHeader: "Confidentiality is available on a separate page to regulate the principles of our processing of your personal data. By using solverse digital.com, you agree that the processing of this data takes place in accordance with the privacy policy."
                    },
                    {
                        key: 3,
                        header: "Service Scope",
                        subHeader: "As Solverse Digital, we are completely free to determine the scope and nature of the services we will provide, within the framework of the law; The changes we will make regarding the services will be deemed to have entered into force by being published on the SITE."
                    },
                    {
                        key: 4,
                        header: "Copyright",
                        subHeader: "The owner of all text, code, graphics, logos, images, sound files and software used on solversedigital.com (hereinafter referred to as 'content') is the Company Name and all rights are reserved. Reproduction or copying of site content is strictly prohibited without written permission."
                    },
                    {
                        key: 5,
                        header: "General provisions",
                        subHeader: "All users undertake to use solversedigital.com only for lawful and personal purposes and not to engage in any activity that would infringe the rights of third parties. Legal and penal responsibilities in their transactions and actions within the SITE belong to them. The SITE has no direct and/or indirect responsibility for any damages incurred or to be incurred by third parties due to these works and actions.We do our best to ensure the accuracy and up-to-dateness of the information available on the SITE. However, despite our efforts, this information may lag behind the actual changes, and there may be some differences. For this reason, we do not give any guarantees, express or implied, or make any commitments regarding the accuracy and up-to-dateness of the information on the site.The SITE may contain hyperlinks to other websites, applications and platforms operated by third parties and whose contents are unknown to us. The SITE, functionality only provides access to these sites, and we do not accept any responsibility for their content.Although we do our best to keep the SITE free of viruses, we do not guarantee that viruses are completely absent. Therefore, it is the users responsibility to take the necessary precautions against viruses while downloading data. Virus etc. We are not responsible for any damage caused by malicious programs, code or materials.We do not guarantee that there will be no defect or error in the services offered on the SITE, or that uninterrupted service will be provided. We may terminate your access to the SITE and its services or any part of the site at any time without notice."
                    },
                    {
                        key: 5,
                        header: "Limitation of Liability",
                        subHeader: "Our liability for damages arising from the use of the SITE is limited to intent and gross negligence. For damages arising from breach of contract, the total compensation that can be claimed is limited to foreseeable damages. The above-mentioned limitations of liability also do not apply in the event of damage to human life, bodily injury or a person's health. In all cases considered force majeure legally, we shall not be liable for any compensation for delay, non-performance or default.Dispute Resolution: The laws of the Republic of Turkey apply in the resolution of any dispute arising from the implementation or interpretation of this Agreement.; "
                    }
                ]
            }
        ]
    },
    whychooseus: {
        title: "Why Choose Us",
        header: "We are the right for your business. We have the expertise and knowledge to offer impartial advice and services at reasonable prices.",
        subHeader: "Together with our professional team, we listen to our customers' needs and find the right solution for them. We carefully create the most suitable advertisements for you by researching the current news and advertising areas related to blockchain technology and cryptocurrencies, help you develop your project in a way that will take it one step further, and we are working hard for your growth."
    },
    conditions: {
        header: "Information",
        items: [
            {
                key: 1,
                icon: "fab fa-gg-circle",
                name: "Projects that try to disable the Solverse digital team will be removed from the system in studies starting with Solverse Digital."
            },
            {
                key: 2,
                icon: "fab fa-gg-circle",
                name: "No influencer can guarantee volume and audience for promotions. Solverse Digital's aim is to create brand awareness"
            },
            {
                key: 3,
                icon: "fab fa-gg-circle",
                name: "All influencers we have and are in contact with are included in our package offers. if you only want to work with certain people scroll to the bottom"
            },
            {
                key: 4,
                icon: "fab fa-gg-circle",
                name: "Price information will be sent to your registered mail address within 1 hour when you click on the Get Offer button."
            }
        ]
    },
    fenomens: {
        header: "Influencers",
        items: [
            {
                key: 1,
                image: "http://api.anachronisticdigital.com/storage/image/623e9e48493e0.jpg",
                name: "JrKripto",
                follower: "150.000+",
                followed: "1800+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/JrKripto",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        link: "t.me/kriptoacademia",
                        icon: "fab fa-telegram z"
                    }
                ]
            },
            {
                key: 2,
                image: "http://api.anachronisticdigital.com/storage/image/623ea041ceca4.jpg",
                name: "Cryptotroia",
                follower: "180.000+",
                followed: "2",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/CryptoTroia?s=09",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        link: "https://www.instagram.com/cryptotroia/?igshid=1s8i03p6a52qc",
                        icon: "fab fa-instagram y"
                    },
                    {
                        key: 3,
                        link: "https://t.me/cryptotroia",
                        icon: "fab fa-telegram z"
                    }
                ]
            },
            {
                key: 3,
                image: "http://api.anachronisticdigital.com/storage/image/623ea12be561b.jpg",
                name: "Coin Dahisi",
                follower: "180.000+",
                followed: "190+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/btcparadisee",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 4,
                image: "http://api.anachronisticdigital.com/storage/image/623ea17d7ffcf.jpg",
                name: "Kripto Ceyda",
                follower: "120.000+",
                followed: "150+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/kriptoceyda",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        link: "https://t.me/ckriptoanaliz",
                        icon: "fab fa-telegram z"
                    }
                ]
            },
            {
                key: 5,
                image: "http://api.anachronisticdigital.com/storage/image/623ea1e676fd1.jpg",
                name: "Rockerfeller",
                follower: "110.000+",
                followed: "210+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://t.me/rockerfelleranaliz",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/rockerfellerxau",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 3,
                        link: "https://www.youtube.com/c/Rockerfeller",
                        icon: "fab fa-youtube r"
                    }
                ]
            },
            {
                key: 6,
                image: "http://api.anachronisticdigital.com/storage/image/623ea2624ad51.jpg",
                name: "Satoshinin Kuzeni",
                follower: "100.000+",
                followed: "380+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://t.me/satoshininkuzenii",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/kuzisatoshinin",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 7,
                image: "http://api.anachronisticdigital.com/storage/image/623ea2e2ab084.jpg",
                name: "Kriptofati",
                follower: "110.000+",
                followed: "420+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/KriptoFati",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 8,
                image: "http://api.anachronisticdigital.com/storage/image/623ea32ecea29.jpg",
                name: "Tarik bilen",
                follower: "230.000+",
                followed: "390+",
                description: "The platform that stands out is youtube",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://www.youtube.com/c/EnonTv",
                        icon: "fab fa-youtube r"
                    }
                ]
            },
            {
                key: 9,
                image: "http://api.anachronisticdigital.com/storage/image/623ea3ca728e8.jpg",
                name: "Kripto Muhendisi",
                follower: "140.000+",
                followed: "290+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/crypt_engineer",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 10,
                image: "http://api.anachronisticdigital.com/storage/image/623ea490350a4.jpg",
                name: "Kripto Fenomen",
                follower: "90.000+",
                followed: "860+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/kripto_fenomen",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 11,
                image: "http://api.anachronisticdigital.com/storage/image/623ea4ef03dcf.jpg",
                name: "Crypto Jordan",
                follower: "80.000+",
                followed: "390+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://t.me/cryptojordanofficial",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/BullsCoin",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 13,
                image: "http://api.anachronisticdigital.com/storage/image/623ea58aa854d.png",
                name: "Crypto Hunter",
                follower: "80.000+",
                followed: "140+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/CryptoHunterTR",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 14,
                image: "http://api.anachronisticdigital.com/storage/image/623ea603a0468.jpg",
                name: "New Listing",
                follower: "80.000+",
                followed: "170+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://t.me/newlistinggg",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/newliistiing?t=Tgl9xRdSJ3IFmV4VFG1KDg&s=09",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 15,
                image: "http://api.anachronisticdigital.com/storage/image/623ea69c98da9.jpg",
                name: "Tahir Elkocaa",
                follower: "60.000+",
                followed: "90+",
                description: "The platform that stands out is Youtube",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://www.youtube.com/tahirelkoca",
                        icon: "fab fa-youtube r"
                    },
                    {
                        key: 2,
                        link: "https://t.me/tahirelkocaduyuru",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 3,
                        link: "https://twitter.com/tahirelkocaa",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 4,
                        link: "https://instagram.com/akiltery",
                        icon: "fab fa-instagram y"
                    }
                ]
            },
            {
                key: 16,
                image: "http://api.anachronisticdigital.com/storage/image/623ea738709e3.jpg",
                name: "Caylak kriptocu",
                follower: "100.000+",
                followed: "440+",
                description: "The platform that stands out is youtube",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "Https://instagram.com/caylakkriptocu",
                        icon: "fab fa-instagram y"
                    },
                    {
                        key: 2,
                        link: "https://m.youtube.com/c/caylakkriptocu",
                        icon: "fab fa-youtube r"
                    },
                    {
                        key: 3,
                        link: "caylakkriptocu.com",
                        icon: "fas fa-link"
                    },
                    {
                        key: 4,
                        link: "t.me/caylakkriptocu",
                        icon: "fab fa-telegram z"
                    }
                ]
            },
            {
                key: 17,
                image: "http://api.anachronisticdigital.com/storage/image/623ea7c8dccb8.jpg",
                name: "Kripto Kurdu",
                follower: "100.000+",
                followed: "140+",
                description: "The platform that stands out is Youtube",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://t.me/+RJgfwuxSteKdsb9G",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/kriptokurduu",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 3,
                        link: "https://youtube.com/c/KriptoParaara",
                        icon: "fab fa-youtube y"
                    },
                    {
                        key: 4,
                        link: "https://www.instagram.com/kriptokurduu",
                        icon: "fab fa-instagram y"
                    }
                ]
            },
            {
                key: 18,
                image: "http://api.anachronisticdigital.com/storage/image/623ea8d1b7616.jpg",
                name: "Expert Kripto",
                follower: "60.000+",
                followed: "100+",
                description: "The platform that stands out is Youtube",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://t.me/expertkriptotelegram",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        link: "https://www.youtube.com/channel/UC3IdUQEbpEDp0eU5d5B7yjA",
                        icon: "fab fa-youtube r"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/expert_kripto",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 19,
                image: "http://api.anachronisticdigital.com/storage/image/623ea9718bab2.jpg",
                name: "Kripto Cem",
                follower: "50.000+",
                followed: "190+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "http://t.me/kripto_cem",
                        icon: "fab fa-telegram z"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/JrKripto",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 20,
                image: "http://api.anachronisticdigital.com/storage/image/623ea9dc18a89.jpg",
                name: "Borsa Editoru",
                follower: "34.000+",
                followed: "10+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://instagram.com/borsaeditor",
                        icon: "fab fa-instagram y"
                    },
                    {
                        key: 2,
                        link: "https://twitter.com/BorsaEditor",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 3,
                        link: "https://www.youtube.com/channel/UCNVS3KpGZxWg6Nf7i6tOC2g",
                        icon: "fab fa-youtube y"
                    }
                ]
            },
            {
                key: 21,
                image: "http://api.anachronisticdigital.com/storage/image/623eaa5a19247.jpg",
                name: "BSC Trader",
                follower: "38.000+",
                followed: "270+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/bsc_trader",
                        icon: "fab fa-twitter x"
                    }
                ]
            },
            {
                key: 22,
                image: "http://api.anachronisticdigital.com/storage/image/623f02090c6e5.jpg",
                name: "Kriptolik",
                follower: "220.000+",
                followed: "300+",
                description: "The platform that stands out is twitter",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        link: "https://twitter.com/theKriptolik",
                        icon: "fab fa-twitter x"
                    },
                    {
                        key: 2,
                        link: "https://t.me/theKriptolik",
                        icon: "fab fa-telegram z"
                    }
                ]
            }
        ]
    },
    developers: {
        header: "Developers",
        items: [
            {
                key: 1,
                image: "http://api.anachronisticdigital.com/storage/image/62469701570cb.webp",
                name: "AD DEV TEAM",
                description: "Our team of experienced anachronistic digital friends who have been working in the industry for a long time can design the website you want for you.",
                button: "Get Offer",
                items: []
            },
            {
                key: 2,
                image: "http://api.anachronisticdigital.com/storage/image/62469154071f4.webp",
                name: "AD APP TEAM",
                description: "Our team of experienced friends of anachronistic digital, who have been working in the sector for a long time, can make the application you want for you.",
                button: "Get Offer",
                items: []
            },
            {
                key: 3,
                image: "http://api.anachronisticdigital.com/storage/image/6246970896719.webp",
                name: "AD DESIGN TEAM",
                description: "Our team of experienced anachronistic digital friends who have been working in the sector for a long time will make the design you want for you.",
                button: "Get Offer",
                items: []
            }
        ]
    },
    communitymanagement: {
        header: "Community Management",
        items: [
            {
                key: 1,
                image: "http://api.anachronisticdigital.com/storage/image/624543ca424f6.png",
                name: "SEYHUN",
                description: "I have been in the cryptocurrency industry for a long time.I have all the necessary equipment for community management and I can manage the turkey community of your project",
                button: "Get Offer",
                items: []
            },
            {
                key: 2,
                image: "http://api.anachronisticdigital.com/storage/image/624543f779cd5.png",
                name: "COMING SOON",
                description: "New freelancer coming soon to our ecosystem. All freelancers who will be added to our ecosystem will be entitled to take place on our site as a result of careful research.",
                button: "Get Offer",
                items: []
            },
            {
                key: 3,
                image: "http://api.anachronisticdigital.com/storage/image/6245440322d3d.png",
                name: "COMING SOON",
                description: "New freelancer coming soon to our ecosystem. All freelancers who will be added to our ecosystem will be entitled to take place on our site as a result of careful research.",
                button: "Get Offer",
                items: []
            },
            {
                key: 4,
                image: "http://api.anachronisticdigital.com/storage/image/62454416c60bd.png",
                name: "COMING SOON",
                description: "New freelancer coming soon to our ecosystem. All freelancers who will be added to our ecosystem will be entitled to take place on our site as a result of careful research.",
                button: "Get Offer",
                items: []
            }
        ]
    },
    pricingcards: {
        header: "Packages",
        items: [
            {
                key: 1,
                promotion: "10%",
                icon: "fab fa-twitter x",
                packet: "Basic  Package",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        icon: "fas fa-times red",
                        name: "Community Management"
                    },
                    {
                        key: 2,
                        icon: "fas fa-check",
                        name: "Twitter Sharing"
                    },
                    {
                        key: 3,
                        icon: "fas fa-check",
                        name: "Telegram Sharing"
                    },
                    {
                        key: 4,
                        icon: "fas fa-check",
                        name: "Instagram Sharing"
                    },
                    {
                        key: 5,
                        icon: "fas fa-times red",
                        name: "Youtube Video"
                    },
                    {
                        key: 6,
                        icon: "fas fa-times red",
                        name: "AMA Study"
                    },
                    {
                        key: 7,
                        icon: "fas fa-times red",
                        name: "Consultancy"
                    },
                    {
                        key: 8,
                        icon: "fas fa-times red",
                        name: "Telegram Shill"
                    },
                    {
                        key: 9,
                        icon: "fas fa-times red",
                        name: "Sweepstake"
                    }
                ]
            },
            {
                key: 2,
                promotion: "10%",
                icon: "fab fa-twitter x",
                packet: "Midrange Package",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        icon: "fas fa-times red",
                        name: "Community Management"
                    },
                    {
                        key: 2,
                        icon: "fas fa-check",
                        name: "Twitter Sharing"
                    },
                    {
                        key: 3,
                        icon: "fas fa-check",
                        name: "Telegram Sharing"
                    },
                    {
                        key: 4,
                        icon: "fas fa-check",
                        name: "Instagram Sharing"
                    },
                    {
                        key: 5,
                        icon: "fas fa-check",
                        name: "Youtube Video"
                    },
                    {
                        key: 6,
                        icon: "fas fa-times red",
                        name: "AMA Study"
                    },
                    {
                        key: 7,
                        icon: "fas fa-times red",
                        name: "Consultancy"
                    },
                    {
                        key: 8,
                        icon: "fas fa-times red",
                        name: "Telegram Shill"
                    },
                    {
                        key: 9,
                        icon: "fas fa-times red",
                        name: "sweepstake"
                    }
                ]
            },
            {
                key: 3,
                promotion: "10%",
                icon: "fab fa-twitter x",
                packet: "Gold package",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        icon: "fas fa-times red",
                        name: "Community Management"
                    },
                    {
                        key: 2,
                        icon: "fas fa-check",
                        name: "Twitter Sharing"
                    },
                    {
                        key: 3,
                        icon: "fas fa-check",
                        name: "Telegram Sharing"
                    },
                    {
                        key: 4,
                        icon: "fas fa-check",
                        name: "Instagram Sharing"
                    },
                    {
                        key: 5,
                        icon: "fas fa-check",
                        name: "Youtube Video"
                    },
                    {
                        key: 6,
                        icon: "fas fa-times red",
                        name: "AMA Study"
                    },
                    {
                        key: 7,
                        icon: "fas fa-check",
                        name: "Consultancy"
                    },
                    {
                        key: 8,
                        icon: "fas fa-times red",
                        name: "Telegram Shill"
                    },
                    {
                        key: 9,
                        icon: "fas fa-check",
                        name: "Sweepstake"
                    }
                ]
            },
            {
                key: 4,
                promotion: "10%",
                icon: "fab fa-twitter x",
                packet: "Premium Package",
                button: "Get Offer",
                items: [
                    {
                        key: 1,
                        icon: "fas fa-check",
                        name: "Community Management"
                    },
                    {
                        key: 2,
                        icon: "fas fa-check",
                        name: "Twitter Sharing"
                    },
                    {
                        key: 3,
                        icon: "fas fa-check",
                        name: "Telegram Sharing"
                    },
                    {
                        key: 4,
                        icon: "fas fa-check",
                        name: "Instagram Sharing"
                    },
                    {
                        key: 5,
                        icon: "fas fa-check",
                        name: "Youtube Video"
                    },
                    {
                        key: 6,
                        icon: "fas fa-check",
                        name: "AMA Study"
                    },
                    {
                        key: 7,
                        icon: "fas fa-check",
                        name: "Consultancy"
                    },
                    {
                        key: 8,
                        icon: "fas fa-check",
                        name: "Telegram Shill"
                    },
                    {
                        key: 9,
                        icon: "fas fa-check",
                        name: "Sweepstake"
                    }
                ]
            }
        ]
    },
    iconset: {
        link: "https://fontawesome.com/v5/search",
        items: [
            {
                key: 1,
                icon: "fas fa-link",
                id: "link"
            },
            {
                key: 2,
                icon: "fab fa-twitter x",
                id: "twitter"
            },
            {
                key: 3,
                icon: "fab fa-instagram y",
                id: "instagram"
            },
            {
                key: 4,
                icon: "fab fa-facebook-messenger z",
                id: "facebook"
            },
            {
                key: 5,
                icon: "fab fa-youtube r",
                id: "youtube"
            },
            {
                key: 6,
                icon: "fab fa-telegram z",
                id: "telegram"
            },
            {
                key: 7,
                icon: "far fa-envelope",
                id: "email"
            },
            {
                key: 8,
                icon: "fas fa-users",
                id: "users"
            },
            {
                key: 9,
                icon: "fas fa-apple-alt",
                id: "apple"
            },
            {
                key: 10,
                icon: "fas fa-assistive-listening-systems",
                id: "listen"
            },
            {
                key: 11,
                icon: "fas fa-asterisk",
                id: "asterisk"
            },
            {
                key: 12,
                icon: "fab fa-asymmetrik",
                id: "asymmetrik"
            },
            {
                key: 13,
                icon: "fas fa-at",
                id: "at"
            },
            {
                key: 14,
                icon: "fas fa-bacteria",
                id: "bacteria"
            },
            {
                key: 19,
                icon: "fas fa-balance-scale",
                id: "balance"
            },
            {
                key: 20,
                icon: "fab fa-battle-net",
                id: "battle-net"
            },
            {
                key: 21,
                icon: "fas fa-bell",
                id: "bell"
            },
            {
                key: 22,
                icon: "fas fa-check-circle",
                id: "check-circle"
            },
            {
                key: 23,
                icon: "fas fa-check-double",
                id: "check-double"
            },
            {
                key: 24,
                icon: "fas fa-cookie-bite",
                id: "cookie-bite"
            },
            {
                key: 25,
                icon: "fas fa-copyright",
                id: "copyright"
            },
            {
                key: 26,
                icon: "fas fa-envelope",
                id: "envelope"
            },
            {
                key: 27,
                icon: "fas fa-headset",
                id: "support"
            }
        ]
    },
    state: {
        active: true
    },
    news: {
        items: [
            {
                key: 1,
                image: "http://api.anachronisticdigital.com/storage/image/6246956a6b254.png",
                header: "System is now public",
                subHeader: "We are happy to introduce you to the system that our software developers have developed for a long time. We have shared detailed information about our new system on our twitter address."
            }
        ]
    },
    projects: {
        items: [
            {
                key: 1,
                image: "http://api.anachronisticdigital.com/storage/image/6244bf536885a.png",
                header: "NEW PROJECT",
                subHeader: "system has just become public, projects will be added here as they register"
            },
            {
                key: 2,
                image: "http://api.anachronisticdigital.com/storage/image/6244bf5dd29f6.png",
                header: "NEW PROJECT",
                subHeader: "system has just become public, projects will be added here as they register"
            },
            {
                key: 3,
                image: "http://api.anachronisticdigital.com/storage/image/6244bf72ec943.png",
                header: "NEW PROJECT",
                subHeader: "system has just become public, projects will be added here as they register"
            },
            {
                key: 4,
                image: "http://api.anachronisticdigital.com/storage/image/6244bf8253326.png",
                header: "NEW PROJECT",
                subHeader: "system has just become public, projects will be added here as they register"
            },
            {
                key: 5,
                image: "http://api.anachronisticdigital.com/storage/image/6244bf91c38a8.png",
                header: "NEW PROJECT",
                subHeader: "system has just become public, projects will be added here as they register"
            },
            {
                key: 6,
                image: "http://api.anachronisticdigital.com/storage/image/6244bfa1c61b9.png",
                header: "NEW PROJECT",
                subHeader: "system has just become public, projects will be added here as they register"
            }
        ]
    },
    promotions: {
        images: [
            {
                key: 1,
                image: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80MmU1ZWQyOGRhMjdkNjRlZDFiMDZkYWM2ZTRlMGFkNj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.mOJ0O9kT9rr3daioSePKR21GJgrsD_Brqmw6JnUjwJ0"
            },
            {
                key: 2,
                image: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80MmU1ZWQyOGRhMjdkNjRlZDFiMDZkYWM2ZTRlMGFkNj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.mOJ0O9kT9rr3daioSePKR21GJgrsD_Brqmw6JnUjwJ0"
            },
            {
                key: 3,
                image: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80MmU1ZWQyOGRhMjdkNjRlZDFiMDZkYWM2ZTRlMGFkNj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.mOJ0O9kT9rr3daioSePKR21GJgrsD_Brqmw6JnUjwJ0"
            }
        ]
    },
    softwareprofessions: {
        header: null,
        items: []
    }
}