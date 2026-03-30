import Plex from '@components/Assets/Services/plex.svg';
import Radarr from '@components/Assets/Services/radarr.svg';
import Sonarr from '@components/Assets/Services/sonarr.svg';
import Lidarr from '@components/Assets/Services/lidarr.svg';
import Seerr from '@components/Assets/Services/seerr.svg';
import Prowlarr from '@components/Assets/Services/prowlarr.svg';
import Bazarr from '@components/Assets/Services/bazarr.svg';
import Tdarr from '@components/Assets/Services/tdarr.png';
import Tautulli from '@components/Assets/Services/tautulli.svg';
import qBittorrent from '@components/Assets/Services/qBittorrent.svg';
import Deluge from '@components/Assets/Services/deluge.svg';
import Transmission from '@components/Assets/Services/transmission.png';
import Image from 'next/image';
import {
  ChevronRightIcon,
  HeartIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  CheckBadgeIcon,
  CloudArrowDownIcon,
  EnvelopeOpenIcon,
  FolderIcon,
  KeyIcon,
  LockClosedIcon,
  QueueListIcon,
  ServerStackIcon,
  SignalIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  UserPlusIcon,
  WindowIcon,
  WrenchScrewdriverIcon,
} from '@node_modules/@heroicons/react/24/outline';
import { FormattedMessage } from '@node_modules/react-intl';

const stats = [
  {
    label: <FormattedMessage id="dockerPulls" defaultMessage="Docker Pulls" />,
    value: '5.4K+',
  },
  {
    label: <FormattedMessage id="githubStars" defaultMessage="GitHub Stars" />,
    value: '58+',
  },
];

const whatIsItems = [
  {
    title: (
      <FormattedMessage
        id="unifiedStreamingExperience"
        defaultMessage="Unified Streaming Experience"
      />
    ),
    description: (
      <FormattedMessage
        id="unifiedStreamingExperienceDescription"
        defaultMessage="Streamarr provides a seamless, unified interface to manage and stream your media by integrating with your Plex server and *arr services."
      />
    ),
    icon: SignalIcon,
  },
  {
    title: (
      <FormattedMessage
        id="comprehensiveMediaControl"
        defaultMessage="Comprehensive Media Control"
      />
    ),
    description: (
      <FormattedMessage
        id="comprehensiveMediaControlDescription"
        defaultMessage="Manage your entire media library, downloads, and user access from one place with powerful tools and integrations."
      />
    ),
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: (
      <FormattedMessage
        id="openSourceCommunityDriven"
        defaultMessage="Open Source & Community Driven"
      />
    ),
    description: (
      <FormattedMessage
        id="openSourceCommunityDrivenDescription"
        defaultMessage="Streamarr is fully open-source, enabling community contributions, customization, and transparency."
      />
    ),
    icon: HeartIcon,
  },
  {
    title: (
      <FormattedMessage
        id="activelyDeveloped"
        defaultMessage="Actively Developed"
      />
    ),
    description: (
      <FormattedMessage
        id="activelyDevelopedDescription"
        defaultMessage="Streamarr is under active development, with frequent updates and new features based on user feedback."
      />
    ),
    icon: WrenchScrewdriverIcon,
  },
];

const whatsnew = [
  <FormattedMessage
    key={1}
    id="supportsMostPlexLibraryTypes"
    defaultMessage="Supports most Plex library types, including movies, TV shows, and music"
  />,
  <FormattedMessage
    key={2}
    id="arrServiceIntegrations"
    defaultMessage="*arr service integrations for complete control of your media ecosystem"
  />,
  <FormattedMessage
    key={3}
    id="downloadManagement"
    defaultMessage="Download management for qBittorrent, Deluge, and Transmission"
  />,
  <FormattedMessage
    key={4}
    id="extensiveInviteSystem"
    defaultMessage="Extensive invite system with customizable permissions and access levels"
  />,
  <FormattedMessage
    key={5}
    id="addedPlaylistSupport"
    defaultMessage="Added playlist support for Plex libraries"
  />,
  <FormattedMessage
    key={6}
    id="customizableUserOnboarding"
    defaultMessage="Customizable user onboarding wizard and tutorials"
  />,
  <FormattedMessage
    key={7}
    id="integratedPlexUserManagement"
    defaultMessage="Integrated Plex user management and library access controls"
  />,
];

const highlights = [
  {
    icon: ServerStackIcon,
    photo: '/screenshot/admin_preview.png',
    side: 'left',
    title: (
      <FormattedMessage
        id="everythingYouNeedInOnePlace"
        defaultMessage="Everything you need in one place"
      />
    ),
    subtitle: (
      <FormattedMessage
        id="everythingYouNeedInOnePlaceSubtitle"
        defaultMessage="Streamarr provides a unified interface to manage your media library, stream content, and integrate with your Plex and *arr services, all in one place."
      />
    ),
    description: (
      <FormattedMessage
        id="everythingYouNeedInOnePlaceDescription"
        defaultMessage="No more juggling between different apps and interfaces. Streamarr brings everything together for a seamless media management experience."
      />
    ),
  },
  {
    icon: SignalIcon,
    photo: '/screenshot/services_preview.png',
    side: 'right',
    title: (
      <FormattedMessage
        id="streamingAndManagingYourServices"
        defaultMessage="Streaming and managing your services has never been easier"
      />
    ),
    subtitle: (
      <FormattedMessage
        id="streamingAndManagingYourServicesSubtitle"
        defaultMessage="Streamarr offers a comprehensive set of features that allow you to easily manage your media library, stream content, and integrate with your Plex and *arr services."
      />
    ),
    description: (
      <FormattedMessage
        id="streamingAndManagingYourServicesDescription"
        defaultMessage="With Streamarr, you can effortlessly control your media ecosystem and enjoy your content without any hassle."
      />
    ),
  },
];

export const integrations = [
  {
    label: 'Plex',
    icon: Plex,
    href: 'https://www.plex.tv/',
  },
  {
    label: 'Radarr',
    icon: Radarr,
    href: 'https://radarr.video',
  },
  {
    label: 'Sonarr',
    icon: Sonarr,
    href: 'https://sonarr.tv',
  },
  {
    label: 'Lidarr',
    icon: Lidarr,
    href: 'https://lidarr.audio',
  },
  {
    label: 'Seerr',
    icon: Seerr,
    href: 'https://seerr.dev',
  },
  {
    label: 'Prowlarr',
    icon: Prowlarr,
    href: 'https://prowlarr.com/',
  },
  {
    label: 'Bazarr',
    icon: Bazarr,
    href: 'https://bazarr.media/',
  },
  {
    label: 'Tdarr',
    icon: Tdarr,
    href: 'https://tdarr.io/',
  },
  {
    label: 'Tautulli',
    icon: Tautulli,
    href: 'https://tautulli.com/',
  },
  {
    label: 'qBittorrent',
    icon: qBittorrent,
    href: 'https://www.qbittorrent.org/',
  },
  {
    label: 'Deluge',
    icon: Deluge,
    href: 'https://deluge-torrent.org/',
  },
  {
    label: 'Transmission',
    icon: Transmission,
    href: 'https://transmissionbt.com/',
  },
];

const features = [
  {
    title: (
      <FormattedMessage
        id="unifiedDashboard"
        defaultMessage="Unified Dashboard"
      />
    ),
    description: (
      <FormattedMessage
        id="unifiedDashboardDescription"
        defaultMessage="Manage Plex and *arr services from a single, modern interface."
      />
    ),
    icon: SquaresPlusIcon,
  },
  {
    title: (
      <FormattedMessage
        id="featuresMostPlexLibraryTypes"
        defaultMessage="Supports Most Plex Library Types"
      />
    ),
    description: (
      <FormattedMessage
        id="featuresMostPlexLibraryTypesDescription"
        defaultMessage="Works with movies, TV shows, music, and more."
      />
    ),
    icon: FolderIcon,
  },
  {
    title: (
      <FormattedMessage
        id="featuresArrServiceIntegrations"
        defaultMessage="*arr Service Integrations"
      />
    ),
    description: (
      <FormattedMessage
        id="featuresArrServiceIntegrationsDescription"
        defaultMessage="Integrates with Radarr, Sonarr, Lidarr, Seerr, Prowlarr, Bazarr, Tdarr, and Tautulli."
      />
    ),
    icon: ServerStackIcon,
  },
  {
    title: (
      <FormattedMessage
        id="featuresTorrentClientSupport"
        defaultMessage="Torrent Client Support"
      />
    ),
    description: (
      <FormattedMessage
        id="featuresTorrentClientSupportDescription"
        defaultMessage="Download management for qBittorrent, Deluge, and Transmission."
      />
    ),
    icon: CloudArrowDownIcon,
  },
  {
    title: (
      <FormattedMessage
        id="granularUserPermissions"
        defaultMessage="Granular User Permissions"
      />
    ),
    description: (
      <FormattedMessage
        id="granularUserPermissionsDescription"
        defaultMessage="Control access for different users and roles with fine-grained permissions."
      />
    ),
    icon: KeyIcon,
  },
  {
    title: (
      <FormattedMessage
        id="featuresExtensiveInviteSystem"
        defaultMessage="Extensive Invite System"
      />
    ),
    description: (
      <FormattedMessage
        id="featuresExtensiveInviteSystemDescription"
        defaultMessage="Invite users with customizable permissions and access levels."
      />
    ),
    icon: UserPlusIcon,
  },
  {
    title: (
      <FormattedMessage
        id="customizableOnboarding"
        defaultMessage="Customizable Onboarding"
      />
    ),
    description: (
      <FormattedMessage
        id="customizableOnboardingDescription"
        defaultMessage="User onboarding wizard and tutorials for easy setup."
      />
    ),
    icon: AcademicCapIcon,
  },
  {
    title: (
      <FormattedMessage
        id="featuresIntegratedPlexUserManagement"
        defaultMessage="Integrated Plex User Management"
      />
    ),
    description: (
      <FormattedMessage
        id="featuresIntegratedPlexUserManagementDescription"
        defaultMessage="Manage Plex users and library access directly from Streamarr."
      />
    ),
    icon: UserGroupIcon,
  },
  {
    title: (
      <FormattedMessage
        id="playlistSupport"
        defaultMessage="Playlist Support"
      />
    ),
    description: (
      <FormattedMessage
        id="playlistSupportDescription"
        defaultMessage="Create and manage playlists for Plex libraries."
      />
    ),
    icon: QueueListIcon,
  },
  {
    title: (
      <FormattedMessage
        id="modernResponsiveWebInterface"
        defaultMessage="Modern Responsive Web Interface"
      />
    ),
    description: (
      <FormattedMessage
        id="modernResponsiveWebInterfaceDescription"
        defaultMessage="Enjoy a fast, mobile-friendly UI."
      />
    ),
    icon: WindowIcon,
  },
  {
    title: (
      <FormattedMessage
        id="inviteOnlyAccess"
        defaultMessage="Invite-Only Access"
      />
    ),
    description: (
      <FormattedMessage
        id="inviteOnlyAccessDescription"
        defaultMessage="Control who can join your Streamarr instance with a secure, flexible invite system."
      />
    ),
    icon: EnvelopeOpenIcon,
  },
  {
    title: (
      <FormattedMessage
        id="libraryAccessControls"
        defaultMessage="Library Access Controls"
      />
    ),
    description: (
      <FormattedMessage
        id="libraryAccessControlsDescription"
        defaultMessage="Grant or restrict access to specific Plex libraries for each user."
      />
    ),
    icon: LockClosedIcon,
  },
];

const faqs = [
  {
    question: (
      <FormattedMessage
        id="onboardNewUsersQuestion"
        defaultMessage="How do I onboard new users with specific permissions?"
      />
    ),
    answer: (
      <FormattedMessage
        id="onboardNewUsersAnswer"
        defaultMessage="Use the invite system to generate codes with custom permissions, library access, usage limits, and expiration. Invited users can be added to your Plex server and Streamarr with the exact access you configure."
      />
    ),
  },
  {
    question: (
      <FormattedMessage
        id="userNotAppearingQuestion"
        defaultMessage="What should I do if a user is not appearing on my Plex server after redeeming an invite?"
      />
    ),
    answer: (
      <FormattedMessage
        id="userNotAppearingAnswer"
        defaultMessage="Ensure the internal Python Plex Sync service is running. Check application logs for errors related to Plex invite operations."
      />
    ),
  },
  {
    question: (
      <FormattedMessage
        id="resetOnboardingQuestion"
        defaultMessage="Can I reset onboarding or tutorials for myself or other users?"
      />
    ),
    answer: (
      <FormattedMessage
        id="resetOnboardingAnswer"
        defaultMessage="Yes. Users can reset onboarding in their account settings. Admins can reset onboarding for any user from the user management panel."
      />
    ),
  },
  {
    question: (
      <FormattedMessage
        id="manageInvitesQuestion"
        defaultMessage="How do I manage or limit the number of invites users can create?"
      />
    ),
    answer: (
      <FormattedMessage
        id="manageInvitesAnswer"
        defaultMessage="Admins can set default invite quotas and override them per user. Users with Manage Users or Manage Invites permissions are exempt from quotas."
      />
    ),
  },
  {
    question: (
      <FormattedMessage
        id="notificationsIssueQuestion"
        defaultMessage="Why are notifications not being sent or received?"
      />
    ),
    answer: (
      <FormattedMessage
        id="notificationsIssueAnswer"
        defaultMessage="Check that notification agents (Email, Web Push, In-App) are enabled and configured. Users must enable notification types in their preferences. For email, ensure a valid address is set; for push, verify subscription."
      />
    ),
  },
  {
    question: (
      <FormattedMessage
        id="installAppQuestion"
        defaultMessage="How do I install Streamarr as a mobile or desktop app?"
      />
    ),
    answer: (
      <FormattedMessage
        id="installAppAnswer"
        defaultMessage="Streamarr supports PWA installation. On Chrome/Edge, use the install icon in the address bar. On Android/iOS, use the browser menu to add to home screen. PWA features require HTTPS."
      />
    ),
  },
];

export default function Home() {
  return (
    <main className="relative">
      <section
        id="hero"
        className="flex flex-col items-center justify-center max-w-7xl mx-auto mt-10 px-5"
      >
        <div className="my-6 flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/nickelsh1ts/streamarr/releases/tag/v1.4.0"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-primary/80 text-primary-content/60 hover:text-primary-content/80 text-sm font-medium hover:bg-primary/20 hover:border-primary/30 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            v1.4.0 <span>-</span> Beta
            <ChevronRightIcon className="w-5 h-5 ml-1 -mr-1 opacity-60 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block leading-tight text-balance">
            <FormattedMessage
              id="unifiedStreamingExperience"
              defaultMessage="Unified Streaming Experience"
            />
          </span>
          <span className="block leading-tight text-primary">
            <FormattedMessage
              id="featureRichControl"
              defaultMessage="Feature Rich Control"
            />
          </span>
        </h1>
        <p className="my-6 text-lg text-center text-neutral sm:text-xl max-w-3xl mx-auto text-balance">
          <FormattedMessage
            id="streamarrDescription"
            defaultMessage="Streamarr is an open-source media management and streaming platform that integrates with your Plex server and *arr services."
          />
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center mt-2">
          <a
            href="https://docs.streamarr.dev/getting-started"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-accent border border-accent text-warning-content text-lg font-medium hover:bg-accent/60 transition-colors"
          >
            <FormattedMessage
              id="letsGetStarted"
              defaultMessage="Let's Get Started"
            />
          </a>
          <div className="flex gap-6 item-center justify-center">
            {stats.map((stat, idx) => (
              <p
                key={idx}
                className="text-2xl font-extrabold py-2 text-center items-center h-full"
              >
                {stat.value}
                <span className="block font-medium text-sm text-neutral">
                  {stat.label}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12 w-full overflow-hidden bg-base-300/50 backdrop-blur rounded-xl shadow-2xl border border-base-200/50">
          <div className="relative aspect-video bg-linear-to-br from-base-300 to-base-100 flex items-center justify-center">
            <Image
              alt="Streamarr dashboard screenshot"
              width="1920"
              height="1080"
              src="/screenshot/preview_dashboard.png"
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section id="what-is" className="bg-base-200 mt-8 py-16 md:py-24 ">
        <div
          className="flex flex-col items-center justify-center max-w-7xl mx-auto py-8 px-5"
          id="what-is"
        >
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary-content font-semibold text-sm uppercase tracking-wider">
              <FormattedMessage id="whatIs" defaultMessage="What is" />
            </span>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl flex gap-2 justify-center items-center">
              <span className="text-transparent bg-clip-text bg-primary">
                Streamarr
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatIsItems.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-base-300 border border-neutral/50 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="highlights" className="py-16 md:py-24">
        <div id="whats-new" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                <FormattedMessage id="whatsNew" defaultMessage="What's New" />
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                <FormattedMessage
                  id="activelyEvolving"
                  defaultMessage="Actively evolving for the best experience"
                />
              </h2>
              <p className="mt-4 text-lg text-neutral">
                <FormattedMessage
                  id="activelyEvolvingDescription"
                  defaultMessage="Streamarr is actively developed and maintained, with regular updates and new features added all the time. Check out the latest release notes to see what's new."
                />
              </p>
              <ul className="mt-6 space-y-4">
                {whatsnew.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-neutral">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nickelsh1ts/streamarr/releases"
                className="mt-8 inline-flex gap-2 items-center text-primary hover:text-primary/60 font-medium"
              >
                <FormattedMessage
                  id="readLatestReleaseNotes"
                  defaultMessage="Read the latest release notes"
                />
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                <div className="relative bg-linear-to-br from-secondary/60 to-primary/60 flex items-center justify-center">
                  <Image
                    alt="Streamarr dashboard screenshot"
                    width={2310}
                    height={1570}
                    src="/screenshot/whats_new.png"
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 1280px"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {highlights.map((item, idx) => (
          <div key={idx} className="relative py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 items-center">
                <div
                  className={`order-2 ${item.side === 'left' ? 'lg:order-1' : ''} mt-8 lg:mt-0`}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative bg-linear-to-br from-secondary/60 to-primary/60 flex items-center justify-center border border-gray-700/50">
                      <Image
                        alt="Streamarr dashboard screenshot"
                        width={2310}
                        height={1570}
                        src={item.photo}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 1280px"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`order-1 ${item.side === 'left' ? 'lg:order-2' : ''}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/60 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-lg text-neutral">{item.subtitle}</p>
                  <p className="mt-8 pt-8 border-t border-neutral text-neutral">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="integrations" className="py-16 md:py-24 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              <FormattedMessage
                id="integrations"
                defaultMessage="Integrations"
              />
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              <FormattedMessage
                id="worksWithManyPopularServices"
                defaultMessage="Works with many popular services"
              />
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral">
              <FormattedMessage
                id="integrationsDescription"
                defaultMessage="Streamarr integrates seamlessly with a variety of popular services to enhance your media management experience."
              />
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {integrations.map((integration) => (
              <a
                key={integration.label}
                href={integration.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <span className="w-16 h-16 rounded-xl bg-base-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Image
                    src={integration.icon}
                    alt={`${integration.label} logo`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                    unoptimized
                  />
                </span>
                <span className="text-white">{integration.label}</span>
              </a>
            ))}
            <div className="flex flex-col items-center group">
              <span className="w-16 h-16 rounded-xl bg-base-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PlusIcon className="w-8 h-8 text-neutral" />
              </span>
              <span className="text-white">
                <FormattedMessage id="+moreSoon" defaultMessage="+ more soon" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-16 md:py-24 bg-linear-to-br from-primary/30 to-secondary/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <FormattedMessage id="features" defaultMessage="Features" />
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral ">
              <FormattedMessage
                id="exploreFeatures"
                defaultMessage="Explore the powerful features that make Streamarr the ultimate media management solution:"
              />
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group">
                <div className="w-12 h-12 rounded-lg bg-primary/30 backdrop-blur flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-neutral">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="py-16 md:py-24 bg-base-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <FormattedMessage
                id="faqs"
                defaultMessage="Frequently Asked Questions"
              />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-base-300 border border-neutral/60"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="get-started" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-secondary to-primary shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-neutral)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral)_1px,transparent_1px)] opacity-10 bg-size-[24px_24px]"></div>
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <FormattedMessage
                    id="readyToGetStarted"
                    defaultMessage="Ready to get started?"
                  />
                </h2>
                <p className="mt-4 text-lg text-indigo-100">
                  <FormattedMessage
                    id="streamarrEasyToSetUp"
                    defaultMessage="Streamarr is easy to set up and use, with comprehensive documentation to guide you."
                  />
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://docs.streamarr.dev/getting-started"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-base-100 text-base-100 bg-white rounded-lg shadow hover:bg-white/60 transition-all"
                  >
                    <FormattedMessage
                      id="installationGuide"
                      defaultMessage="Installation Guide"
                    />
                  </a>
                  <a
                    href="https://docs.streamarr.dev/"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white/60 rounded-lg hover:bg-white/30 transition-all"
                  >
                    <FormattedMessage
                      id="fullDocumentation"
                      defaultMessage="Full Documentation"
                    />
                  </a>
                </div>
              </div>
              <div className="hidden lg:block p-8">
                <div className="relative rounded-xl overflow-hidden shadow-2xl transform translate-x-8 -translate-y-4">
                  <div className="relative bg-gray-900/30 backdrop-blur flex items-center justify-center">
                    <Image
                      alt="Streamarr screenshot"
                      width={2310}
                      height={1570}
                      loading="lazy"
                      className="w-full h-full object-contain"
                      src={'/screenshot/preview_dashboard.png'}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
