import { NavItem } from "../types";

export const items: NavItem[] = [
  {
    label: "Home",
    link: {
      href: "/home",
      target: null
    }
  },
  {
    label: "Learn",
    sections: [
      {
        label: "Learn in-demand skills",
        items: [
          {
            label: "Trails",
            link: {
              href: "/trails",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trails-51e244f36ec499621c2658ee28edfd90ac8045fd7e7a06d573cc988db10db208.png",
            description: "Follow guided learning paths"
          },
          {
            label: "Trailmixes",
            link: {
              href: "/en/trailmixes",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trailmixes-3f21265f15965dcee0364fb72f05131378aaccf9ecb48465c72eb0b7178a9049.png",
            description: "Create and follow custom learning playlists"
          }
        ]
      },
      {
        label: "Take a class with us",
        items: [
          {
            label: "Trailhead Academy",
            link: {
              href: "/academy",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trailhead_academy-d9e26ab480d5b4b1e3f202b848326c115bd5c3f1ffbf7a18ef8065a3434fbb0d.png",
            description: "Learn directly from Salesforce experts"
          }
        ]
      },
      {
        label: "Discover your ideal career",
        items: [
          {
            label: "Career Paths",
            link: {
              href: "/career-path/",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/career_paths-21f06f044d4bc37debd588a04c950e027e3b97e1a6d70b9c65b076e0be12ae5d.png",
            description: "Explore which career is right for you"
          }
        ]
      },
      {
        label: "Choose your own learning adventure",
        items: [
          {
            label: "Modules",
            link: {
              href: "/modules",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/modules-4f688ef85de67dbc50b20093592d2eb18d6579bded02c97c195c69075a8c12f7.png",
            description: "Learn new skills in bite-sized units"
          },
          {
            label: "Projects",
            link: {
              href: "/projects",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/projects-203a3a08066536b68ba0db79d9f5b09732da14d0129219b7f9ff8d9699e191ad.png",
            description: "Get hands-on with step-by-step instructions"
          },
          {
            label: "Trailhead Live",
            link: {
              href: "/live/",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/live-ed562e5616f608e6901006f5498d3e0020b4350f03c16b5f8af051f36e90524f.png",
            description: "Watch live and on-demand videos"
          }
        ]
      }
    ],
    sectionColumns: [3, 1]
  },
  {
    label: "Credentials",
    sections: [
      {
        label: "Earn resume-worthy credentials",
        items: [
          {
            label: "Superbadges",
            link: {
              href: "/superbadges",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/superbadges-ed9e106ced2e77d23e404c52206fb243dd4a9bcaa7425c7bc1708bfb3ec53b84.png",
            description: "Prove your skills with real-world business challenges"
          },
          {
            label: "Certifications",
            link: {
              href: "/credentials/administratoroverview",
              target: "_self"
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/certifications-a72d70a002018ed30aa68b8606964967928ba20fc8d9e7ed9295a3f1a0b6f70c.png",
            description: "Earn role-based Salesforce credentials",
            items: [
              {
                label: "Maintain Certifications",
                link: {
                  href:
                    "/help?article=Certification-Release-Maintenance-Schedule",
                  target: null
                }
              },
              {
                label: "Verify Certifications",
                link: {
                  href: "/credentials/verification",
                  target: null
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "Community",
    sections: [
      {
        label: "Connect to opportunities",
        items: [
          {
            label: "Trailblazer Community",
            link: {
              href: "https://trailblazer.salesforce.com/about",
              target: "_blank"
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/community-b3a817ab76ef33f6cb5d0513fa37435173b38d5788169d7abd78c629fc66a706.png",
            description: "Get help, answers, and inspiration from peers"
          },
          {
            label: "Community Groups",
            link: {
              href:
                "https://trailblazercommunitygroups.com/?&utm_source=trailhead&utm_medium=web-homepage-hero&utm_campaign=community_groups",
              target: "_blank"
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trailblazer_groups-904782d99e6104df534351fa5508bb3393a10324d5eb2ec1910add69f0386ff8.png",
            description: "Meet with local Trailblazers and learn together"
          },
          {
            label: "Events",
            link: {
              href: "/calendar",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/events-f635f78aac0961bb0881bd134e9a5994f26066983f08ea5961be7772a35de3f4.png",
            description: "Explore the ultimate calendar of can't-miss events"
          },
          {
            label: "Trailblazer Connect",
            link: {
              href: "/trailblazerconnect",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trailblazer_connect-a9651db57f325fe5274a07594c858aebcde2beea1ff9431ff495d8d2b21cdd50.png",
            description: "Apply for a mentor and find a job"
          }
        ]
      },
      {
        label: "Get inspired",
        items: [
          {
            label: "Trailblazer Stories",
            link: {
              href: "/trailblazers",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trailblazer_stories-29556249cbd350a1e9c83cd79ceb659d7cbc3ac631474e79fee3a303d34a0674.png",
            description: "Get inspired by these moving stories"
          },
          {
            label: "Trailblazer Radio",
            link: {
              href: "/podcasts",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trailblazer_radio-94c704845b5167fdd2dafb03d7642af663cabc21b1fbe2ef6cb1232d475d3ed3.png",
            description: "Tune in to podcasts for tips & stories"
          }
        ]
      },
      {
        label: "Give Back",
        items: [
          {
            label: "Be a Multiplier (BAM)",
            link: {
              href: "/bam",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/be_a_multiplier_bam-a4fe3b838961747034b50612af950e1c1dfd4ee1a09bfef5272689d646e352cd.png",
            description: "Lead workshops for your community"
          }
        ]
      },
      {
        label: "Have fun",
        items: [
          {
            label: "Quests",
            link: {
              href: "/quests",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/quests-10626de96d3f68c3460d130421dd884b3b569548fa8f7f4194117a03249129f4.png",
            description: "Challenge yourself to win fun prizes"
          }
        ]
      }
    ],
    sectionColumns: [1, 3]
  },
  {
    label: "For Companies",
    sections: [
      {
        label: "Create a culture of learning",
        items: [
          {
            label: "myTrailhead",
            link: {
              href: "/mytrailhead",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/mytrailhead-aca929521598ad8aa5ffdb0a45040d5294c860072c5a0f2dacc4eca03e5f1cb4.png",
            description: "Reinvent learning and enablement"
          },
          {
            label: "Customer Stories",
            link: {
              href: "/customer-spotlights",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/customer_stories-63283ca5aa62178738755cfa8a0665dae5046be3bcc58cf9ea6f086df74c7087.png",
            description: "Learn how our customers are using Trailhead"
          },
          {
            label: "User Adoption Services",
            link: {
              href: "/user-adoption-services",
              target: null
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/user_adoption_services-f3a99fe1dd583ced34fe1872ece075d08dda9c6e2654994a0dc1670e3af12751.png",
            description: "Increase adoption and productivity"
          },
          {
            label: "Trail Tracker",
            link: {
              href:
                "https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EFpAtUAL",
              target: "_blank"
            },
            iconUrl:
              "https://trailhead.salesforce.com/assets/navigation/trail_tracker-308d0dd327e11add87d273cebaf6b56f88222771754fc41be48abf679878a2e6.png",
            description: "Motivate and track employee learning"
          }
        ]
      }
    ]
  }
];
