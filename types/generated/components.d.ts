import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCalification extends Struct.ComponentSchema {
  collectionName: 'components_components_califications';
  info: {
    displayName: 'Calification';
    icon: 'heart';
  };
  attributes: {
    Coment: Schema.Attribute.Component<'shared.comments-califications', true>;
    Tag: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsCardPreview extends Struct.ComponentSchema {
  collectionName: 'components_components_card_previews';
  info: {
    displayName: 'CardPreview';
    icon: 'book';
  };
  attributes: {
    cardLayout: Schema.Attribute.Enumeration<['collapse', 'extended']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'extended'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    imageFit: Schema.Attribute.Enumeration<['cover', 'contain']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cover'>;
    intro: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    project: Schema.Attribute.Relation<'oneToOne', 'api::project.project'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsCardmedia extends Struct.ComponentSchema {
  collectionName: 'components_components_cardmedias';
  info: {
    displayName: 'cardmedia';
    icon: 'stack';
  };
  attributes: {
    linktext: Schema.Attribute.String;
    linkurl: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsContentIntro extends Struct.ComponentSchema {
  collectionName: 'components_components_content_intros';
  info: {
    displayName: 'ContentIntro';
    icon: 'arrowDown';
  };
  attributes: {
    h1Font: Schema.Attribute.Enumeration<['anton', 'roboto-mono']> &
      Schema.Attribute.DefaultTo<'anton'>;
    h1Uppercase: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    h3Font: Schema.Attribute.Enumeration<['anton', 'roboto-mono']> &
      Schema.Attribute.DefaultTo<'roboto-mono'>;
    linkLabel1: Schema.Attribute.String;
    linkLabel2: Schema.Attribute.String;
    linkLabel3: Schema.Attribute.String;
    linkUrl1: Schema.Attribute.String;
    linkUrl2: Schema.Attribute.String;
    linkUrl3: Schema.Attribute.String;
    showCollapse: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    titleh1: Schema.Attribute.String & Schema.Attribute.Required;
    titleh2: Schema.Attribute.String;
    titleh3: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsContentTextList extends Struct.ComponentSchema {
  collectionName: 'components_components_content_text_lists';
  info: {
    displayName: 'ContentTextList';
    icon: 'layer';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.listitem', true>;
    showlist: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Text: Schema.Attribute.Text;
  };
}

export interface ComponentsDasdasd extends Struct.ComponentSchema {
  collectionName: 'components_components_dasdasds';
  info: {
    displayName: 'dasdasd';
    icon: 'apps';
  };
  attributes: {};
}

export interface ComponentsDescriptionProject extends Struct.ComponentSchema {
  collectionName: 'components_components_description_projects';
  info: {
    displayName: 'DescriptionProject';
    icon: 'cup';
  };
  attributes: {
    rol: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Mi papel'>;
    roltext: Schema.Attribute.String;
    stack: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tecnolog\u00EDa utilizada'>;
    stacktext: Schema.Attribute.String;
    time: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tiempo total'>;
    timetext: Schema.Attribute.String;
  };
}

export interface ComponentsExpComponent extends Struct.ComponentSchema {
  collectionName: 'components_components_exp_components';
  info: {
    displayName: 'ExpComponent';
    icon: 'apps';
  };
  attributes: {
    Exp: Schema.Attribute.Component<'shared.exp-list', true>;
  };
}

export interface ComponentsHeroMinimalf extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_minimalves';
  info: {
    displayName: 'hero-minimalf';
    icon: 'alien';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'proyects'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'I am a software engineer based in Manchester, focused on creating architectural systems and high-performance digital experiences.'>;
    eyebrowLeft: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'PORTFOLIO / 2026'>;
    eyebrowRight: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'AVAILABLE FOR PROJECTS'>;
    scrollText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'SCROLL TO EXPLORE'>;
    showScrollIndicator: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    socialLinks: Schema.Attribute.Component<'shared.shared-social-link', true>;
  };
}

export interface ComponentsInconArrrow extends Struct.ComponentSchema {
  collectionName: 'components_components_incon_arrrows';
  info: {
    displayName: 'InconArrrow';
    icon: 'arrowDown';
  };
  attributes: {
    textArrow: Schema.Attribute.String;
  };
}

export interface ComponentsIntroDescription extends Struct.ComponentSchema {
  collectionName: 'components_components_intro_descriptions';
  info: {
    displayName: 'IntroDescription';
    icon: 'emotionHappy';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    InfoTag: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsIntroProject extends Struct.ComponentSchema {
  collectionName: 'components_components_intro_projects';
  info: {
    displayName: 'IntroProject';
    icon: 'filter';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['h1', 'h2', 'h3']>;
    textIntro: Schema.Attribute.Text;
    titleIntro: Schema.Attribute.String;
    uppercase: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ComponentsMediaContentSplit extends Struct.ComponentSchema {
  collectionName: 'components_components_media_content_splits';
  info: {
    displayName: 'media-content-split';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'A decentralized visualization engine built for high-frequency data streams within the obsidian ecosystem.'>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'01 / OVERVIEW'>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    itemsList: Schema.Attribute.Component<'shared.items', true>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    mediaAlt: Schema.Attribute.String;
    mediaPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'THE CHALLENGE'>;
  };
}

export interface ComponentsPortfolioPreview extends Struct.ComponentSchema {
  collectionName: 'components_components_portfolio_previews';
  info: {
    displayName: 'Web Develop Portfolio preview';
    icon: 'briefcase';
  };
  attributes: {
    Description: Schema.Attribute.String;
    FirstDescription: Schema.Attribute.String;
    FirstImg: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    FirstTag: Schema.Attribute.String;
    FirstTextBtn: Schema.Attribute.String;
    FirstTextUrl: Schema.Attribute.String;
    FirstTitle: Schema.Attribute.String;
    SecondDescription: Schema.Attribute.String;
    SecondImg: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    SecondTag: Schema.Attribute.String;
    SecondTextBtn: Schema.Attribute.String;
    SecondTextUrl: Schema.Attribute.String;
    SecondTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsProfileHighlight extends Struct.ComponentSchema {
  collectionName: 'components_components_profile_highlights';
  info: {
    displayName: 'profile-highlight';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    imageAlt: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    showSection: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    socialLinks: Schema.Attribute.Component<'shared.shared-social-link', true>;
  };
}

export interface ComponentsProjectHeroDark extends Struct.ComponentSchema {
  collectionName: 'components_components_project_hero_darks';
  info: {
    displayName: 'project-hero-dark';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'A decentralized visualization engine built for high-frequency data streams within the obsidian ecosystem.'>;
    featuredImage: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    projectCode: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'PROJECT CODE: OX-F3'>;
    technologies: Schema.Attribute.Component<
      'shared.technologies-labels',
      true
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'NEURAL ARCH'>;
    urlProject: Schema.Attribute.String;
    urlText: Schema.Attribute.String;
  };
}

export interface ComponentsProjectTechnicalBreakdown
  extends Struct.ComponentSchema {
  collectionName: 'components_components_project_technical_breakdowns';
  info: {
    displayName: 'project-technical-breakdown';
    icon: 'bell';
  };
  attributes: {
    featuredItem: Schema.Attribute.Component<
      'shared.shared-feature-item',
      true
    >;
    highlightDescription: Schema.Attribute.Text;
    highlightTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'THE ARCH CONTROLLER'>;
    images: Schema.Attribute.Media<'images', true>;
    sectionIndex: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'02 // TECHNICAL SOLUTION'>;
    sectionLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'SCHEMATIC BREAKDOWN'>;
  };
}

export interface ComponentsProjectTextMedia extends Struct.ComponentSchema {
  collectionName: 'components_components_project_text_medias';
  info: {
    displayName: 'project-text-media';
    icon: 'arrowRight';
  };
  attributes: {
    altMedia: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'01 // THE CHALLENGE'>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    mediaPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.Text;
  };
}

export interface ComponentsSelectedWorks extends Struct.ComponentSchema {
  collectionName: 'components_components_selected_works';
  info: {
    displayName: 'selected-works';
    icon: 'archive';
  };
  attributes: {
    defaultFilter: Schema.Attribute.Enumeration<['all', 'code', 'wordpress']>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'A CURATED SELECTION OF TECHNICAL IMPLEMENTATIONS AND DIGITAL EXPLORATIONS.'>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    selectedWorks: Schema.Attribute.Relation<
      'oneToMany',
      'api::project-portfolio.project-portfolio'
    >;
    showFilters: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'SELECTED WORKS'>;
  };
}

export interface ComponentsSeoComponent extends Struct.ComponentSchema {
  collectionName: 'components_components_seo_components';
  info: {
    displayName: 'SeoComponent';
    icon: 'question';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    hideFromSearchEngines: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    metaDescription: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'index, nofollow',
        'noindex, nofollow',
      ]
    >;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<
      ['website', 'article', 'product', 'profile']
    >;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    >;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface ComponentsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'archive';
  };
  attributes: {};
}

export interface ComponentsStackGrid extends Struct.ComponentSchema {
  collectionName: 'components_components_stack_grids';
  info: {
    displayName: 'stack-grid';
    icon: 'bulletList';
  };
  attributes: {
    item: Schema.Attribute.Component<'shared.stack-item', true>;
    sectionLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTitleDivisor extends Struct.ComponentSchema {
  collectionName: 'components_components_title_divisors';
  info: {
    displayName: 'titleDivisor';
    icon: 'crop';
  };
  attributes: {
    titleDivisor: Schema.Attribute.String;
  };
}

export interface ComponentsWebDevelopHero extends Struct.ComponentSchema {
  collectionName: 'components_components_web_develop_heroes';
  info: {
    displayName: 'web-develop-hero';
    icon: 'alien';
  };
  attributes: {
    Tag: Schema.Attribute.String;
    TextBtn: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    UrlBtn: Schema.Attribute.String;
  };
}

export interface ComponentsWebDevelopResources extends Struct.ComponentSchema {
  collectionName: 'components_components_web_develop_resources';
  info: {
    displayName: 'web-develop-resources';
    icon: 'cup';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    btnText: Schema.Attribute.String;
    btnUrl: Schema.Attribute.String;
    description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsWebDevelopTimeline extends Struct.ComponentSchema {
  collectionName: 'components_components_web_develop_timelines';
  info: {
    displayName: 'web-develop-timeline';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'shared.web-develop-items-timeline',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsWebDevelopVideo extends Struct.ComponentSchema {
  collectionName: 'components_components_web_develop_videos';
  info: {
    displayName: 'web-develop-video';
    icon: 'cast';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.web-develop-feature', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    Title: Schema.Attribute.String;
  };
}

export interface NavigationNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'nav-item';
    icon: 'file';
  };
  attributes: {
    label: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface NavigationNavLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_links';
  info: {
    displayName: 'nav-link';
    icon: 'magic';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCommentsCalifications extends Struct.ComponentSchema {
  collectionName: 'components_shared_comments_califications';
  info: {
    displayName: 'CommentsCalifications';
    icon: 'emotionHappy';
  };
  attributes: {
    Calification: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    Description: Schema.Attribute.Text;
    Position: Schema.Attribute.String & Schema.Attribute.Required;
    Tag: Schema.Attribute.Component<'shared.list-tags', true>;
    TimeLapse: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedExpList extends Struct.ComponentSchema {
  collectionName: 'components_shared_exp_lists';
  info: {
    displayName: 'ExpList';
    icon: 'bulletList';
  };
  attributes: {
    Company: Schema.Attribute.String & Schema.Attribute.Required;
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Duration: Schema.Attribute.String & Schema.Attribute.Required;
    Position: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIconTec extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_tecs';
  info: {
    displayName: 'iconTec';
    icon: 'attachment';
  };
  attributes: {
    imageicon: Schema.Attribute.Media<'images' | 'files'>;
    texticon: Schema.Attribute.String;
  };
}

export interface SharedItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'items';
    icon: 'bulletList';
  };
  attributes: {
    itemsString: Schema.Attribute.String;
  };
}

export interface SharedListTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_tags';
  info: {
    displayName: 'ListTags';
    icon: 'bulletList';
  };
  attributes: {
    TagText: Schema.Attribute.String;
  };
}

export interface SharedListitem extends Struct.ComponentSchema {
  collectionName: 'components_shared_listitems';
  info: {
    displayName: 'listitem';
    icon: 'bulletList';
  };
  attributes: {
    bullet: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_feature_items';
  info: {
    displayName: 'shared.feature-item';
    icon: 'command';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_social_links';
  info: {
    displayName: 'shared.social-link';
    icon: 'server';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'github',
        'twitter',
        'youtube',
        'linkedin',
        'instagram',
        'dribbble',
        'behance',
        'upwork',
      ]
    > &
      Schema.Attribute.Required;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'GitHub'>;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStackItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stack_items';
  info: {
    displayName: 'stack-item';
    icon: 'briefcase';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'VITE'>;
    showItem: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedTechnologiesLabels extends Struct.ComponentSchema {
  collectionName: 'components_shared_technologies_labels';
  info: {
    displayName: 'technologies-labels';
    icon: 'attachment';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'JavaScript'>;
  };
}

export interface SharedWebDevelopFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_web_develop_features';
  info: {
    displayName: 'webDevelopFeature';
    icon: 'message';
  };
  attributes: {
    description: Schema.Attribute.String;
    icons: Schema.Attribute.Enumeration<
      ['icon 1', 'icon 2', 'icon 3', 'icon 4']
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SharedWebDevelopItemsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_shared_web_develop_items_timelines';
  info: {
    displayName: 'web-develop-items-timeline';
  };
  attributes: {
    description: Schema.Attribute.String;
    icons: Schema.Attribute.Enumeration<['one', 'two', 'three', 'four']>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.calification': ComponentsCalification;
      'components.card-preview': ComponentsCardPreview;
      'components.cardmedia': ComponentsCardmedia;
      'components.content-intro': ComponentsContentIntro;
      'components.content-text-list': ComponentsContentTextList;
      'components.dasdasd': ComponentsDasdasd;
      'components.description-project': ComponentsDescriptionProject;
      'components.exp-component': ComponentsExpComponent;
      'components.hero-minimalf': ComponentsHeroMinimalf;
      'components.incon-arrrow': ComponentsInconArrrow;
      'components.intro-description': ComponentsIntroDescription;
      'components.intro-project': ComponentsIntroProject;
      'components.media-content-split': ComponentsMediaContentSplit;
      'components.portfolio-preview': ComponentsPortfolioPreview;
      'components.profile-highlight': ComponentsProfileHighlight;
      'components.project-hero-dark': ComponentsProjectHeroDark;
      'components.project-technical-breakdown': ComponentsProjectTechnicalBreakdown;
      'components.project-text-media': ComponentsProjectTextMedia;
      'components.selected-works': ComponentsSelectedWorks;
      'components.seo-component': ComponentsSeoComponent;
      'components.social-links': ComponentsSocialLinks;
      'components.stack-grid': ComponentsStackGrid;
      'components.title-divisor': ComponentsTitleDivisor;
      'components.web-develop-hero': ComponentsWebDevelopHero;
      'components.web-develop-resources': ComponentsWebDevelopResources;
      'components.web-develop-timeline': ComponentsWebDevelopTimeline;
      'components.web-develop-video': ComponentsWebDevelopVideo;
      'navigation.nav-item': NavigationNavItem;
      'navigation.nav-link': NavigationNavLink;
      'shared.comments-califications': SharedCommentsCalifications;
      'shared.exp-list': SharedExpList;
      'shared.icon-tec': SharedIconTec;
      'shared.items': SharedItems;
      'shared.list-tags': SharedListTags;
      'shared.listitem': SharedListitem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.shared-feature-item': SharedSharedFeatureItem;
      'shared.shared-social-link': SharedSharedSocialLink;
      'shared.slider': SharedSlider;
      'shared.stack-item': SharedStackItem;
      'shared.technologies-labels': SharedTechnologiesLabels;
      'shared.web-develop-feature': SharedWebDevelopFeature;
      'shared.web-develop-items-timeline': SharedWebDevelopItemsTimeline;
    }
  }
}
