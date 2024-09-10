// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MarianoChaves', // Updated GitHub username
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Projects',
      mode: 'manual', // Changed to manual to list specific projects
      manual: []
    },
    external: {
      header: 'Public Projects',
      projects: [
        {
          title: 'nuMCMC',
          description:
            'The MCMC algorithm using C++: based on emcee. The library can be used to create samplings using Markov chain Monte Carlo (MCMC).',
          imageUrl:
            'https://github.com/MarianoChaves/MCMC/raw/main/examples/example-0/pdf.png',
          link: 'https://github.com/MarianoChaves/MCMC',
        },
        {
          title: 'Wingbits',
          description:
            'Wingbits has implemented a unique reward system using blockchain technology to fairly compensate data providers. This system ensures transparency and equity, as rewards are distributed based on the amount of data sent and the provider’s commitment to the network.',
          imageUrl:
            'https://wingbits.com/static/media/landing_world.e7f1aec6945b8474ff8a3d8060aac5bd.svg',
          link: 'https://wingbits.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mariano Chaves',
    description: 'Data Scientist and Software Engineer with expertise in Computational Physics and Machine Learning.',
    imageURL: '',
  },
  social: {
    linkedin: 'mariano-echaves',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: 'marianoechaves',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://marianochaves.github.io/',
    phone: '+55 19 99724 8395',
    email: 'marianoechaves@gmail.com',
  },
  resume: {
    fileUrl: 'https://github.com/MarianoChaves/marianochaves.github.io/raw/main/CV.pdf',
  },
  skills: [
    'Python', 'C++', 'Git', 'CI/CD', 'CUDA', 'OOP', 'Design Patterns',
    'AWS Cloud', 'Terraform', 'Data pipelines', 'Glue', 'Big Data', 'PySpark',
    'Machine Learning', 'Statistics', 'PyTorch', 'OpenCV', 'React', 'Large Language Models', 'Artificial Inteligence'
  ],
  experiences: [
    {
      company: 'Itaú-Unibanco Holding, Brazil',
      position: 'Senior Data Scientist',
      from: 'Jan 2024',
      to: 'Present',
      companyLink: 'https://www.itau.com.br/',
    },
    {
      company: 'Wingbits, Sweden',
      position: 'Senior Software Engineer (Part-time)',
      from: 'Jan 2024',
      to: 'Present',
      companyLink: 'https://wingbits.com/',
    },
    {
      company: 'Itaú-Unibanco Holding, Brazil',
      position: 'Data Scientist',
      from: 'Jan 2021',
      to: 'Dez 2024',
      companyLink: 'https://www.itau.com.br/',
    },
    {
      company: 'Itaú-Unibanco Holding, Brazil',
      position: 'Model validation analyst',
      from: 'Oct 2021',
      to: 'Dez 2021',
      companyLink: 'https://www.itau.com.br/',
    },
  ],
  educations: [
    {
      institution: 'Universidade Estadual de Campinas, Brazil',
      degree: 'Doctorate in Physics',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'Karlshure Institute of Technology, Germany',
      degree: 'Visiting PhD Student',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Universidade Federal Fluminense, Brazil',
      degree: 'Masters in Physics',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'Universidade Federal Fluminense, Brazil',
      degree: 'Bachelor in Computational Physics',
      from: '2012',
      to: '2016',
    },
  ],
  publications: [
    {
      title: 'Testing non-standard neutrino interactions in (anti)-electron neutrino disappearance experiments',
      journalName: 'JHEP',
      authors: 'Chaves, Mariano E. and de Holanda, Pedro Cunha and Peres, Orlando Luis Goulart',
      link: 'https://link.springer.com/article/10.1007/JHEP03(2023)180',
      description:
        'We search for scalar and tensor non-standard interactions using (anti)-electron neutrino disappearance in oscillation data. We found a slight preference for non-zero CP violation, coming from both tensor and scalar interactions. The preference for CP violation is led by Daya Bay low-energy data with a significance that reaches ~ 1.7σ in the global analysis (and ~ 2.1σ when considering only medium baseline reactors data) compared to the standard neutrino oscillation scenario. In some cases, our results indicate that the atmospheric mass squared difference falls outside the range allowed by accelerator long baseline experiments. This suggests the need for further investigation in future work.',
    },
    {
      title: 'Resolving the LMA-dark NSI degeneracy with coherent neutrino-nucleus scattering',
      journalName: 'JHEP',
      authors: 'Chaves, Mariano and Schwetz, Thomas',
      link: 'https://link.springer.com/article/10.1007/JHEP05(2021)042',
      description:
        'In the presence of non-standard neutrino interactions (NSI), a degeneracy exists in neutrino oscillation data, which involves the flipping of the octant of the mixing angle θ12 and the type of the neutrino mass ordering. In this article, we revisit the status of this degeneracy in the light of recent data on coherent elastic neutrino-nucleus scattering (CEνNS) from the COHERENT experiment. For general relative couplings to up and down quarks, the degeneracy is disfavoured at the 2σ level by the latest data but remains at a higher confidence level. We investigate the requirements of future CEνNS measurements to resolve the degeneracy with high significance. We find that a measurement involving both, electron and muon neutrino flavours and a target with a neutron-to-proton ratio close to 1 is required. For example, an experiment with a silicon target at the European Spallation Source can resolve the degeneracy at more than 4σ for arbitrary relative couplings to up and down quarks.',
    },
    {
      title: 'Improvements on perturbative oscillation formulas including non-standard neutrino interactions',
      journalName: 'J. Phys. G',
      authors: 'Chaves, M. E. and Gratieri, D. R. and Peres, O. L. G.',
      link: 'https://doi.org/10.1088/1361-6471/abae17',
      description:
        'We use perturbation theory to obtain neutrino oscillation probabilities, including the standard mass-mixing paradigm and non-standard neutrino interactions (NSI). The perturbation is made on the standard parameters and sin2(θ13) and on the non-diagonal NSI parameters, but keeps diagonal NSI parameters non-perturbated. We perform the calculation for the channels νμ → νe and νμ → νμ. The resulting oscillation formulas are compact and present functional structure similar to the standard oscillation (SO) case. They apply to a wide range in the allowed NSI space of parameters and include the previous results from perturbative approaches as limit cases. Also, we use the compact formulas we found to explain the origin of the degeneracies in the neutrino probabilities in terms of the invariance of amplitude and phase of oscillations. Then we determine analytically the multiple sets of combinations of SO and NSI parameters that result in oscillation probabilities identical to the SO case.',
    }],
  blog: {
    source: 'medium', // No blog details available
    username: 'marianoechaves',
    limit: 3,
  },
  googleAnalytics: {
    id: 'G-DKC4ET776Z',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark'
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
