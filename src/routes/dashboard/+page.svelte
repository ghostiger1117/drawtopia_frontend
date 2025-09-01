<script lang="ts">
  import ChildProfileComponent from "../../components/ChildProfileComponent.svelte";
  import StoryLibraryComponent from "../../components/StoryLibraryComponent.svelte";
  import usercircleplus from "../../assets/UserCirclePlus.svg";
  import magnifyingglass from "../../assets/MagnifyingGlass.svg";
  import caretdown from "../../assets/CaretDown.svg";
  import house from "../../assets/House.svg";
  import baby from "../../assets/Baby.svg";
  import bookopen from "../../assets/BookOpen.svg";
  import gift from "../../assets/Gift.svg";
  import list from "../../assets/List.svg";
  import x from "../../assets/X.svg";

  let showMobileMenu = false;

  const toggleMobileMenu = () => {
    showMobileMenu = !showMobileMenu;
  };
  const childProfiles = [
    {
      name: "Emma",
      ageLabel: "6 Years Old",
      avatarUrl: "https://placehold.co/48x48",
      storiesCreatedText: "Emma (Age 5-7)",
      lastStory: "Birthday",
    },
    {
      name: "Mason",
      ageLabel: "5 Years Old",
      avatarUrl: "https://placehold.co/48x48",
      storiesCreatedText: "Mason (Age 3-5)",
      lastStory: "Bedtime",
    },
    {
      name: "Olivia",
      ageLabel: "8 Years Old",
      avatarUrl: "https://placehold.co/48x48",
      storiesCreatedText: "Olivia (Age 8-10)",
      lastStory: "Holiday",
    },
  ];

  const stories: Array<{
    title: string;
    author: string;
    status: "completed" | "generating" | "draft" | "failed";
    createdDate: string;
    durationText: string;
    occasion: string;
  }> = [
    {
      title: "Luna's Magic Adventure",
      author: "Andreas",
      status: "completed",
      createdDate: "15/01/2024",
      durationText: "8 min read",
      occasion: "Birthday",
    },
    {
      title: "Forest of Whispers",
      author: "Andreas",
      status: "generating",
      createdDate: "15/01/2024",
      durationText: "8 min read",
      occasion: "Birthday",
    },
    {
      title: "Starry Night Quest",
      author: "Andreas",
      status: "draft",
      createdDate: "15/01/2024",
      durationText: "8 min read",
      occasion: "Birthday",
    },
    {
      title: "Ocean Rescue",
      author: "Andreas",
      status: "failed",
      createdDate: "15/01/2024",
      durationText: "8 min read",
      occasion: "Birthday",
    },
  ];
</script>

<div class="parent-dashboard">
  <div class="navigation">
    <div class="sidebarheader">
      <div class="logo-text-full">
        <div class="logo-img"></div>
      </div>
      <div data-weight="Regular" class="icon-list" on:click={toggleMobileMenu} on:keydown={(e) => e.key === 'Enter' && toggleMobileMenu()} role="button" tabindex="0">
        <img src={showMobileMenu ? x : list} alt={showMobileMenu ? "close" : "menu"} class="list" />
      </div>
    </div>
    <div class="content">
      <div class="sidebargrouping-label">
        <div><span class="mainmenu_span">MENU</span></div>
      </div>
      <div class="menu">
        <div class="parent-menu-dropdown">
          <div class="sidebar-menu-parent">
            <div class="title-icon">
              <div class="house">
                <img src={house} alt="house" class="house" />
              </div>
              <div><span class="home_span">Home</span></div>
            </div>
          </div>
        </div>
        <div class="parent-menu-dropdown_01">
          <div class="sidebar-menu-parent_01">
            <div class="title-icon_01">
              <div class="baby">
                <img src={baby} alt="baby" class="baby" />
              </div>
              <div><span class="childprofiles_span">Child Profiles</span></div>
            </div>
          </div>
        </div>
        <div class="parent-menu-dropdown_02">
          <div class="sidebar-menu-parent_02">
            <div class="title-icon_02">
              <div class="bookopen">
                <img src={bookopen} alt="bookopen" class="bookopen" />
              </div>
              <div><span class="storylibrary_span">Story Library</span></div>
            </div>
          </div>
        </div>
        <div class="parent-menu-dropdown_03">
          <div class="sidebar-menu-parent_03">
            <div class="title-icon_03">
              <div class="gift">
                <img src={gift} alt="gift" class="gift" />
              </div>
              <div><span class="gifttracking_span">Gift Tracking</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Mobile Menu Overlay -->
  {#if showMobileMenu}
    <div class="mobile-menu-overlay" on:click={toggleMobileMenu} on:keydown={(e) => e.key === 'Escape' && toggleMobileMenu()} role="dialog" tabindex="-1">
      <div class="mobile-menu" on:click|stopPropagation on:keydown|stopPropagation role="dialog" tabindex="0">
        <div class="mobile-menu-header">
          <div class="logo-text-full">
            <div class="logo-img"></div>
          </div>
          <div class="close-menu" on:click={toggleMobileMenu} on:keydown={(e) => e.key === 'Enter' && toggleMobileMenu()} role="button" tabindex="0">
            <img src={x} alt="close" class="list" />
          </div>
        </div>
        <div class="mobile-menu-content">
          <div class="mobile-menu-label">
            <span class="mainmenu_span">MENU</span>
          </div>
          <div class="mobile-menu-items">
            <div class="mobile-menu-item active">
              <div class="mobile-menu-icon">
                <img src={house} alt="house" class="house" />
              </div>
              <span class="home_span">Home</span>
            </div>
            <div class="mobile-menu-item">
              <div class="mobile-menu-icon">
                <img src={baby} alt="baby" class="baby" />
              </div>
              <span class="childprofiles_span">Child Profiles</span>
            </div>
            <div class="mobile-menu-item">
              <div class="mobile-menu-icon">
                <img src={bookopen} alt="bookopen" class="bookopen" />
              </div>
              <span class="storylibrary_span">Story Library</span>
            </div>
            <div class="mobile-menu-item">
              <div class="mobile-menu-icon">
                <img src={gift} alt="gift" class="gift" />
              </div>
              <span class="gifttracking_span">Gift Tracking</span>
            </div>
          </div>
        </div>
        <div class="mobile-menu-footer">
          <div class="mobile-profile-close">
            <img
              class="ellipse-7"
              src="https://placehold.co/40x40"
              alt="Alex Smith"
            />
            <div class="heading">
              <div class="alex-smith">
                <span class="alexsmith_span">Alex Smith</span>
              </div>
              <div class="premium-plan">
                <span class="premiumplan_span">Premium Plan</span>
              </div>
            </div>
            <img src={caretdown} alt="caretdown" class="caretdown" />
          </div>
        </div>
      </div>
    </div>
  {/if}
  
  <div class="frame-1410104150">
    <div class="sidebarpenaksir-kasir">
      <div class="sidebarheader_01">
        <div class="title">
          <div class="welcome-back">
            <span class="welcomeback_span">Welcome back!</span>
          </div>
          <div class="manage-your-childrens-stories-and-gifts">
            <span class="manageyourchildrensstoriesandgifts_span"
              >Manage your children's stories and gifts</span
            >
          </div>
        </div>
        <div class="profile-close">
          <div class="frame-1410103913">
            <img
              class="ellipse-7"
              src="https://placehold.co/40x40"
              alt="Alex Smith"
            />
            <div class="heading">
              <div class="alex-smith">
                <span class="alexsmith_span">Alex Smith</span>
              </div>
              <div class="premium-plan">
                <span class="premiumplan_span">Premium Plan</span>
              </div>
            </div>
          </div>
          <img src={caretdown} alt="caretdown" class="caretdown" />
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="frame-1410104149">
        <div class="frame-1410104154">
          <div class="frame-1410104155">
            <div class="frame-1410104151">
              <div class="child-profiles_01">
                <span class="childprofiles_01_span">Child Profiles</span>
              </div>
              <div class="manage-your-childrens-story-preferences-and-progress">
                <span
                  class="manageyourchildrensstorypreferencesandprogress_span"
                  >Manage your children's story preferences and progress</span
                >
              </div>
            </div>
            <div class="frame-1410103868">
              <img src={usercircleplus} alt="plus" class="plus" />
              <div class="sub-menu">
                <div class="add-children">
                  <span class="addchildren_span">Add Children</span>
                </div>
              </div>
            </div>
          </div>
          <div class="child-profiles-grid">
            {#each childProfiles as c}
              <ChildProfileComponent
                name={c.name}
                ageLabel={c.ageLabel}
                avatarUrl={c.avatarUrl}
                storiesCreatedText={c.storiesCreatedText}
                lastStory={c.lastStory}
              />
            {/each}
          </div>
        </div>
      </div>
      <div class="frame-1410104150_01">
        <div class="frame-1410104154_01">
          <div class="frame-1410104155_01">
            <div class="frame-1410104151_01">
              <div class="story-library_01">
                <span class="storylibrary_01_span">Story Library</span>
              </div>
              <div class="browse-and-manage-all-created-stories">
                <span class="browseandmanageallcreatedstories_span"
                  >Browse and manage all created stories</span
                >
              </div>
            </div>
            <div class="frame-1410103899">
              <div class="frame-1410103898">
                <img
                  src={magnifyingglass}
                  alt="magnifyingglass"
                  class="magnifyingglass"
                />
                <div class="search-stories">
                  <span class="searchstories_span">Search Stories</span>
                </div>
              </div>
              <div class="dropdown">
                <div class="dropdown_01">
                  <div class="all-stories">
                    <span class="allstories_span">All Stories</span>
                  </div>
                  <img src={caretdown} alt="caretdown" class="caretdown" />
                </div>
                <div class="dropdown_02">
                  <div class="newest-first">
                    <span class="newestfirst_span">Newest First</span>
                  </div>
                  <img src={caretdown} alt="caretdown" class="caretdown" />
                </div>
              </div>
            </div>
          </div>
          <div class="stories-grid">
            {#each stories as s}
              <StoryLibraryComponent
                title={s.title}
                author={s.author}
                status={s.status}
                createdDate={s.createdDate}
                durationText={s.durationText}
                occasion={s.occasion}
              />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .logo-img {
    background-image: url("../../assets/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  .mainmenu_span {
    color: var(--Gray-gray-400, #90a1b9);
    font-size: 12px;
    font-family: Open Sauce One;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 16.8px;
    letter-spacing: 1.2px;
    word-wrap: break-word;
  }

  .home_span {
    color: #438bff;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 700;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .childprofiles_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .storylibrary_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .gifttracking_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .welcomeback_span {
    color: black;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 28px;
    word-wrap: break-word;
  }

  .welcome-back {
    align-self: stretch;
  }

  .manageyourchildrensstoriesandgifts_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .manage-your-childrens-stories-and-gifts {
    align-self: stretch;
  }

  .ellipse-7 {
    width: 40px;
    height: 40px;
    background: #d9d9d9;
    border-radius: 9999px;
  }

  .alexsmith_span {
    color: #121212;
    font-size: 18px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 25.2px;
    word-wrap: break-word;
  }

  .alex-smith {
    align-self: stretch;
  }

  .premiumplan_span {
    color: #727272;
    font-size: 14px;
    font-family: Quicksand;
    font-weight: 600;
    line-height: 19.6px;
    word-wrap: break-word;
  }

  .premium-plan {
    align-self: stretch;
  }

  .childprofiles_01_span {
    color: black;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .child-profiles_01 {
    align-self: stretch;
  }

  .manageyourchildrensstorypreferencesandprogress_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .manage-your-childrens-story-preferences-and-progress {
    align-self: stretch;
    height: 100%;
  }


  .addchildren_span {
    color: white;
    font-size: 20px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 28px;
    word-wrap: break-word;
  }

  .add-children {
    text-align: center;
  }

  .storylibrary_01_span {
    color: black;
    font-size: 24px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 33.6px;
    word-wrap: break-word;
  }

  .story-library_01 {
    align-self: stretch;
  }

  .browseandmanageallcreatedstories_span {
    color: #666d80;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 400;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .browse-and-manage-all-created-stories {
    align-self: stretch;
    height: 26px;
  }

  .searchstories_span {
    color: #727272;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .search-stories {
    text-align: center;
  }

  .allstories_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .all-stories {
    text-align: center;
  }

  .newestfirst_span {
    color: black;
    font-size: 16px;
    font-family: Quicksand;
    font-weight: 500;
    line-height: 22.4px;
    word-wrap: break-word;
  }

  .newest-first {
    text-align: center;
  }

  .sidebargrouping-label {
    align-self: stretch;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .title {
    width: 305px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: inline-flex;
  }

  .heading {
    width: 119px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
    display: inline-flex;
  }

  .frame-1410104151 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: inline-flex;
  }

  .sub-menu {
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .frame-1410104151_01 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    display: inline-flex;
  }

  .logo-text-full {
    width: 131px;
    height: 24.48px;
    position: relative;
  }

  .icon-list {
    width: 24px;
    height: 24px;
    position: relative;
  }

  .house {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .baby {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .bookopen {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .gift {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .caretdown {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .magnifyingglass {
    width: 24px;
    height: 24px;
    position: relative;
    overflow: hidden;
  }

  .frame-1410103913 {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .sidebarheader {
    width: 260px;
    height: 87px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--Color-Neutral-White, white);
    border-right: 1px var(--Color-Border-Default, #e2e8f0) solid;
    border-bottom: 1px var(--Color-Border-Default, #e2e8f0) solid;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
  }

  .title-icon {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .title-icon_01 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .title-icon_02 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .title-icon_03 {
    flex: 1 1 0;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .frame-1410103868 {
    height: 49px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: #438bff;
    border-radius: 12px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .frame-1410103898 {
    width: 347px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    background: #f8fafb;
    border-radius: 20px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: flex;
  }

  .dropdown_01 {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 12px;
    background: white;
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: flex;
  }

  .dropdown_02 {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 12px;
    background: white;
    border-radius: 20px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    display: flex;
  }

  .profile-close {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: #fcfcfc;
    border-radius: 12px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .sidebar-menu-parent {
    align-self: stretch;
    padding: 12px;
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .sidebar-menu-parent_01 {
    align-self: stretch;
    padding: 12px;
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .sidebar-menu-parent_02 {
    align-self: stretch;
    padding: 12px;
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .sidebar-menu-parent_03 {
    align-self: stretch;
    padding: 12px;
    border-radius: 6px;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
  }

  .frame-1410104155 {
    align-self: stretch;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
  }

  .dropdown {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .sidebarheader_01 {
    align-self: stretch;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--Color-Neutral-White, white);
    border-right: 1px var(--Color-Border-Default, #e2e8f0) solid;
    border-bottom: 1px var(--Color-Border-Default, #e2e8f0) solid;
    justify-content: space-between;
    align-items: flex-end;
    display: inline-flex;
  }

  .parent-menu-dropdown {
    width: 236px;
    background: #eef6ff;
    border-radius: 12px;
    outline: 1px #ededed solid;
    outline-offset: -1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }

  .parent-menu-dropdown_01 {
    width: 236px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }

  .parent-menu-dropdown_02 {
    width: 236px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }

  .parent-menu-dropdown_03 {
    width: 236px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }

  .frame-1410103899 {
    width: 662px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .sidebarpenaksir-kasir {
    width: 100%;
    height: 91px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .menu {
    width: 260px;
    padding: 12px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    display: flex;
  }

  .frame-1410104155_01 {
    align-self: stretch;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 16px;
    width: 100%;
  }

  .content {
    width: 260px;
    height: 927px;
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--White-bg-white, white);
    overflow: hidden;
    border-right: 1px var(--Gray-stk-gray-200, #e2e8f0) solid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }

  .child-profiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    width: 100%;
  }

  .frame-1410104154_01 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .navigation {
    height: 1024px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }

  .frame-1410104154 {
    flex: 1 1 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
  }

  .frame-1410104150_01 {
    align-self: stretch;
    padding: 16px;
    background: white;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
  }

  .frame-1410104149 {
    align-self: stretch;
    padding: 16px;
    background: white;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
  }

  .sidebar {
    width: 100%;
    padding: 24px;
    background: #f8fafb;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
  }

  .frame-1410104150 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
    width: 100%;
  }

  .parent-dashboard {
    width: 100%;
    height: 100%;
    background: white;
    overflow: hidden;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
  }

  /* Mobile responsive styles */
  @media (max-width: 800px) {
    .parent-dashboard {
      flex-direction: column;
    }

    .navigation {
      display: block;
      height: auto;
      width: 100%;
    }

    .sidebarheader {
      display: flex;
      width: 100%;
      height: auto;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 24px;
      padding-bottom: 24px;
      border-right: none;
      border-bottom: 1px var(--Color-Border-Default, #e2e8f0) solid;
    }

    .content {
      display: none;
    }

    .frame-1410104150 {
      width: 100%;
      padding: 16px;
    }

    .sidebar {
      width: 100%;
      padding: 16px;
      gap: 16px;
    }

    .sidebarheader_01 {
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 12px;
      padding-bottom: 12px;
    }

    .title {
      width: 100%;
    }

    .welcomeback_span {
      font-size: 24px;
      line-height: 33.6px;
      text-align: center;
    }

    .manageyourchildrensstoriesandgifts_span {
      font-size: 16px;
      line-height: 22.4px;
      text-align: center;
    }

    .childprofiles_01_span {
      font-size: 20px;
      line-height: 28px;
    }

    .storylibrary_01_span {
      font-size: 20px;
      line-height: 28px;
    }

    .manageyourchildrensstorypreferencesandprogress_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .browseandmanageallcreatedstories_span {
      font-size: 14px;
      line-height: 19.6px;
    }

    .child-profiles-grid {
      grid-template-columns: 1fr;
      gap: 12px;
      width: 100%;
    }

    .stories-grid {
      grid-template-columns: 1fr;
      gap: 12px;
      width: 100%;
    }

    .frame-1410103868 {
      width: 100%;
      height: 49px;
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .frame-1410103899 {
      width: 100%;
      flex-direction: column;
      gap: 12px;
    }

    .frame-1410103898 {
      width: 100%;
    }

    .dropdown {
      width: 100%;
      flex-direction: column;
      gap: 8px;
    }

    .dropdown_01,
    .dropdown_02 {
      width: 100%;
      justify-content: center;
    }

    .frame-1410104149 {
      padding: 12px;
    }

    .frame-1410104150_01 {
      padding: 12px;
    }

    .frame-1410104154 {
      gap: 16px;
    }

    .frame-1410104154_01 {
      gap: 16px;
    }

    .frame-1410104155 {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .frame-1410104155_01 {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .profile-close {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .heading {
      width: auto;
    }

    .alexsmith_span {
      font-size: 16px;
      line-height: 22.4px;
    }

    .premiumplan_span {
      font-size: 12px;
      line-height: 16.8px;
    }

    .ellipse-7 {
      width: 32px;
      height: 32px;
    }
    .profile-close {
      display: none;
    }

    .icon-list {
      cursor: pointer;
    }
  }

  /* Mobile Menu Styles */
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1000;
  }

  .mobile-menu {
    width: 100%;
    height: 100%;
    background: white;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-header {
    padding: 24px 20px;
    border-bottom: 1px var(--Color-Border-Default, #e2e8f0) solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
  }

  .close-menu {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu-content {
    padding: 24px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .mobile-menu-footer {
    padding: 20px;
    background: white;
  }

  .mobile-profile-close {
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    background: #fcfcfc;
    border-radius: 12px;
    outline: 1px #dcdcdc solid;
    outline-offset: -1px;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    display: flex;
  }

  .mobile-menu-label {
    padding-left: 4px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mobile-menu-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mobile-menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .mobile-menu-item:hover {
    background-color: #f8fafb;
  }

  .mobile-menu-item.active {
    background-color: #eef6ff;
  }

  .mobile-menu-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 801px) {
    .mobile-menu-overlay {
      display: none;
    }
  }


</style>
