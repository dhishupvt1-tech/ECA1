
import React from 'react';
import { Event, TeamMember } from './types';

export const EVENTS: Event[] = [
  // ON STAGE
  {
    id: 'os1',
    title: 'Echo Ensemble',
    time: '10:00 AM',
    sector: 'Music',
    description: 'Group music performance featuring acoustic and digital integration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs4NYzs-3Zdfzj7OUJ38c2PA91prxE-zPoOhl02swn01YngOm6K34pmOsJjiRGOFIHKVUGbLhcnL8IZ1RFhto4MpOGrQojKcS9NwlIMEHzxpKDPe3GOenMcCFj1VtzvpILE6JmCgVWuy8NejowfdJlyfvYOLE66Q9DCx1UBgPjNUdiXHxwfuWjeoPN7pRGY__Rr5AOjGRewzARGLEDzlLwu-3HjA0iBLAIhuLTViqFea_KEsTo-REbZtMxk_76ihvEW9zIyT9QlBs',
    location: 'Main Stage',
    type: 'on-stage',
    guidelines: [
      'Maximum of 4 minutes performance is allowed.',
      'Only 6-8 members can be in team.',
      'Usage of instruments is at the discretion of the team members.',
      'Usage of karaoke is strictly prohibited.',
      'Teams violating guidelines will face disqualification.'
    ]
  },
  {
    id: 'os2',
    title: 'Prime Time Panic',
    time: '11:30 AM',
    sector: 'Drama',
    description: 'Channel surfing enacting scenarios based on judge prescriptions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH0H-KxrFV0WhwdgjO9BEeaLIi15LFToeDlYwTApeV9omVJxe2k3tDrMWSinBP26fZ6lGaBMboVRkw_Z4GR5iynsJi1ILIuVaVoMA23TbQEOTEW1zVKvO-RtQOLRyvdph8iK7_9WlS4fR6W5Zm7aLfEy2l3gKWcD8cnRLPbP2APCfEyg2_UtLYvdBCeDGev4Xg4jY9KSAHKF9FpsNbNGy647fi22vntpKAaWO1j46i_e2ZypDNyt-CV1vJuWzxrouMUJoF7N_3FiY',
    location: 'Main Stage',
    type: 'on-stage',
    guidelines: [
      'Maximum of 4 minutes performance is allowed.',
      'Only 5 members can be in a team.',
      'Humour against any Community, Caste, Race, Gender or Religion is strictly prohibited.',
      'Usage of institution name is strictly prohibited.',
      'Abusive language leads to immediate disqualification.'
    ]
  },
  {
    id: 'os3',
    title: 'Adapt Tune',
    time: '01:00 PM',
    sector: 'Dance',
    description: 'Dynamic response to sudden transitions in music played on the spot.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2g3Ct58GhFS1VvsCJ8NcKOeytInt4i4vz8ngATUQdDoQckNgYJsXi20xti3kVUvXXqGqfSGgjUf93oeyHVfd6Al8IZ4agAd9JYcTbmu1COqk1w-wKU6ycW2NzdjT4ez3H_A4m2c4NJJXd1t2Flr86TDMqbtJH9cRIJTf1rodJRHptaND0tNIeWsogspwVrG3CNFzx507tzUktJ57gWaJRu3hN7JzEpnKnxE6BA8zgaFyReRZuXG0wKqk_A3nu_MOauqMT1fSe20',
    location: 'Main Stage',
    type: 'on-stage',
    guidelines: [
      'Two participants per team.',
      'Maximum duration is 3 minutes.',
      'Coordination will be a primary judging factor.',
      'Any vulgarity results in instant disqualification.'
    ]
  },
  {
    id: 'os4',
    title: 'இதிகாச அரங்கேற்றம்',
    time: '02:30 PM',
    sector: 'Culture',
    description: 'Exhibition of cultural characters adhering strictly to traditional themes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtmrAyczinbLK3HhlP1GDFHZoDBuudNFU73V9YdTWUOCK9iSBY05F0--zMN66WE4oXfP6c3YS27i92OT-hlMMPr7WFLJ5Tm5g6iCYood_s1h35K1x2ZybO-C5f0DBOexZfiQFyc3HQBGIzZg_gUJIVUji-TKmdNVx9RaiJhuwVczlZ6K2lBS0fqRNJ6w0j76fsC9RFJn9f7RUHAfICJ9KWrYdh8besERb_L8miErnyGPZaC61ErsfleMBIDwFxU21yJYasFkBXjmw',
    location: 'Main Stage',
    type: 'on-stage',
    guidelines: [
      'Only 10-12 participants per team.',
      'Music must be submitted 2 days prior.',
      'Focus must be on exhibition of cultural characters.',
      'Vulgarity in choreography or costume leads to disqualification.'
    ]
  },
  {
    id: 'os5',
    title: 'Crew in Motion',
    time: '04:00 PM',
    sector: 'Dance',
    description: 'High-energy group dance competition.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO-PXpNZ98GYYVa35yvkZkrJhTt2qYK45luKW9FlnIedmdHerNgDMnxdjy6Ey4sWO6nkFcJHMlr38-zTVrSVrH57LepXpci2fWI5lPnwyaInA-hFfl099loG0Gj0Oq77BzQ2XcvULWlnospwiIz6GrL2dQ_ltVi61iw49QUukdcxbC-7QNwG3otzWRZx2L6qCasIwt4Tq7nySkeoimbbXb2-dBSq4Sps_xnrFHOBCYQEc9dFqzKDy9KtFG8JfRp-W3I7PtisIP8eQ',
    location: 'Main Stage',
    type: 'on-stage',
    guidelines: [
      'Maximum of 5 minutes performance is allowed.',
      'Only 10-12 participants per team.',
      'Audio file must be submitted 2 days prior.',
      'Vulgarity in music, costume, or steps results in disqualification.'
    ]
  },

  // OFF STAGE DAY 1
  {
    id: 'off1',
    title: 'Rough to Real',
    time: 'Day 1 // Session 1',
    sector: 'Art',
    description: 'Intensive pencil sketching workshop.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-HoNN0spUJR4rjbXoFBK5cS9iGRkZUiWkNOnWQ0OaLJO-zi0rojuM9-0GZrSeGynMUFubh8Cy5jb7apS5-KM6-MKJOehXVly3abBpZcA9fuW-RgTqUbUXrHW2s3bSderdDZZR6YJW1Ldhb_wPYd61M2NeD2aboRKI3CkMALh4bWXb9XOANpczl-nfybKw4TB9moQAETfX1F-PSZYBHxYalHCNGJdPTZ52FsgHsN8NYD7B_4saHmyiFfrhZNUNEHMF932wjicvj0',
    location: 'Art Room A',
    type: 'off-stage', day: 1, session: 1,
    guidelines: [
      '60 minutes time limit.',
      'Participants must bring their own materials.',
      'Pencil sketching only permitted.'
    ]
  },
  {
    id: 'off2',
    title: 'Living Canvas',
    time: 'Day 1 // Session 1',
    sector: 'Art',
    description: 'Transforming the human face into art.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD17mY7gHTMNFu2RY980ZLdguDmnGT2X1RIdCLqj3qizU4rTPY4xJQ4n_aVN_5PWxBPg3onUjO2PGYrzG5sMNZJ8oRqASq8Mk9JigrSsgWYzGNlwZSZ_7S7DaShh9MHt5bHyBWFPot-u_BBaejt3WbzBZGN-AyZpAZid2C3_BRJVBWgD4O7y3WY9rNijuyNnUbCVCFxJn0nhUQ5ioXXft8Nqt-v0efFzCC7UfGeMXkBKcJUYJa9US3THYHbQNbMzsMXASRWClh91Y',
    location: 'Art Room B',
    type: 'off-stage', day: 1, session: 1,
    guidelines: [
      'Two participants (model and artist).',
      'No oil paints, permanent markers, or chemical colors.',
      'Painting allowed only on the face.',
      'No offensive, political, or religious content.'
    ]
  },
  {
    id: 'off3',
    title: 'Palm Stories',
    time: 'Day 1 // Session 1',
    sector: 'Art',
    description: 'Traditional Mehndi art competition.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKhJlZUThhUOQ74hGWwufRuvoizfYLYFLNQE3hdicHlgkPZHKoYiA5BGypgFaXXfsYmNpUze5oH22KXVf_k4Vh3uW1flJAGwBzv6SEptjDdZd_Pmfp21o3iN6NFQ4EPde4jfzTH3TYned2K2azmGRFxgUNweOdcd-A732LJ55M63n_u5lLpOi63tEtfhfNFlNpidHZHeU5opdVCvvG4xlcSnw32ONI-QD4jct1MHTpaVVa83Yp4jrfoXU5QpuyXANXx-4wI9Q_1Ro',
    location: 'Terrace Lab',
    type: 'off-stage', day: 1, session: 1,
    guidelines: [
      '60 minutes time limit.',
      '2 participants (model and artist).',
      'No chemical, instant, or glittered Mehndi.',
      'Judgment based on creativity and theme relevance.'
    ]
  },
  {
    id: 'off4',
    title: 'Discarded Beauty',
    time: 'Day 1 // Session 1',
    sector: 'Art',
    description: 'Creating art from trash.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2g3Ct58GhFS1VvsCJ8NcKOeytInt4i4vz8ngATUQdDoQckNgYJsXi20xti3kVUvXXqGqfSGgjUf93oeyHVfd6Al8IZ4agAd9JYcTbmu1COqk1w-wKU6ycW2NzdjT4ez3H_A4m2c4NJJXd1t2Flr86TDMqbtJH9cRIJTf1rodJRHptaND0tNIeWsogspwVrG3CNFzx507tzUktJ57gWaJRu3hN7JzEpnKnxE6BA8zgaFyReRZuXG0wKqk_A3nu_MOauqMT1fSe20',
    location: 'Workshop Wing',
    type: 'off-stage', day: 1, session: 1,
    guidelines: [
      '2 participants per team.',
      '45 minutes time limit.',
      'No ready-made items or fresh materials allowed.',
      'Judges decision is final.'
    ]
  },
  {
    id: 'off5',
    title: 'Mystery Mission',
    time: 'Day 1 // Session 2',
    sector: 'Adventure',
    description: 'High-stakes institutional treasure hunt.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMyoG7RbHRN-v-7L9ztIMoS3rfsLBmV1HyjshgXgeEAkCG7aPDQhY5cXFCfwC9OMOET7H0qQgMS9f8Vtpvw0Jz99AawqNDo0AW9FyWMsgE1X0Iz9RtIebIPqd9noXJX3qbWYUmWhWbbekLLOAAY6ol75XGFzdRpGNhc5mIoACIESmGP2cNydh1K0k6UAaCwxUJZX4BK019Dk_HufixPoFdAwuUbg-M_H0Aabwk9oGAYJjrldrpPbRXOLZwYlfsyaDfeNdOtZhLA4',
    location: 'Campus Wide',
    type: 'off-stage', day: 1, session: 2,
    guidelines: [
      '4 members per team.',
      'Two rounds: qualifying and final.',
      'No mobile phones allowed.',
      'Do not damage institutional property.'
    ]
  },
  {
    id: 'off6',
    title: 'Link It Up',
    time: 'Day 1 // Session 2',
    sector: 'Intellectual',
    description: 'Fast-paced word and song connections.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeDELBIm4zuG2rw2wRve_5YaNW0bkElHwirscq9Pjv78V8i2qpKvyHFd8Tv7ZGkRfGKcN94VPVh1GSoKS0CwvxyTXmDoLYIqoghnE0AFZmu-zLJ_3qjEfJaiBY5y99w5pOP_dtwF-W7GFpajA2XQo8nOcTuXSR6u4kvellFvyfKeAj0C6QOZgnAHTdmc2v3guY4xVkmHppRYFftfDpmmk-IexVQ3pw4poaAYqNZ3hLSywI4klqCxIRiTsfLatoSl9Yu8q5zAyGeFM',
    location: 'Lab Alpha',
    type: 'off-stage', day: 1, session: 2,
    guidelines: [
      '3 members per team.',
      'Find 5 words/songs in 2 minutes.',
      'Higher count qualifies for next round.'
    ]
  },
  {
    id: 'off7',
    title: 'Beat the Squad',
    time: 'Day 1 // Session 2',
    sector: 'Speech',
    description: 'Block and tackle on-the-spot motion shifts.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7aZoJHtqkUHegj1V8DP3DAc-LIEsffkXRUaa2rLmciygse6A3Fi1LzKjB-SYCzrkj4QIuTsjvVNPIqp8vnDOIdIX3Fvlj9dNn_fXoS5nIe90VZJGnjh9VvDqA_LIIQloiLxwrMToFcZmPLUVVc4w0NckzjmnWa1-60mc7E6AHi2RDjlYR8ow3Ef0rYeH5FWGG4Oo9qaBjv248xbMgSW-xxiw9l486hNmBh8TBghHJgtS_MDYjX9D0Dw6DgxNsKysa-h_hdjizIAc',
    location: 'Seminar Hall 1',
    type: 'off-stage', day: 1, session: 2,
    guidelines: [
      'Individual event.',
      '3 minutes total.',
      'Motions changed by judge on the spot.',
      'No offensive political or religious content.'
    ]
  },
  {
    id: 'off8',
    title: 'Humour Hub',
    time: 'Day 1 // Session 2',
    sector: 'Comedy',
    description: 'Standup comedy showdown.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4C65u5CJ3N6onR09UkLx7Yt56494HQGLwQir5Fkv1afGsUGIT6Bf_1A4Lf6XikjF3hEMLUtwJtuhrnGpKNQKWU0YfoXMOfJF0Vs4N6fUXabMuYDlv_Mb2uaW1Fww9dpMHMBRBMuTK0sWC-gemCw2gqqVC8tdIFmJ2MmRMx_UKFTY9CZU_jQr-FZgzZydopGnWmPuqgVWirWKQfW89ISLOVKnAS8G-jSb6gQ7bLpP0_GE4hjFqbA3Qq5onTdvXSpgNomGLOUsGgZo',
    location: 'Seminar Hall 2',
    type: 'off-stage', day: 1, session: 2,
    guidelines: [
      'Individual event.',
      '4-5 minutes time limit.',
      'No offensive political or religious content.',
      'Respective language and stage discipline required.'
    ]
  },
  {
    id: 'off9',
    title: 'Mic Magic',
    time: 'Day 1 // Session 2',
    sector: 'Music',
    description: 'Pure solo singing performance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO-PXpNZ98GYYVa35yvkZkrJhTt2qYK45luKW9FlnIedmdHerNgDMnxdjy6Ey4sWO6nkFcJHMlr38-zTVrSVrH57LepXpci2fWI5lPnwyaInA-hFfl099loG0Gj0Oq77BzQ2XcvULWlnospwiIz6GrL2dQ_ltVi61iw49QUukdcxbC-7QNwG3otzWRZx2L6qCasIwt4Tq7nySkeoimbbXb2-dBSq4Sps_xnrFHOBCYQEc9dFqzKDy9KtFG8JfRp-W3I7PtisIP8eQ',
    location: 'Music Studio',
    type: 'off-stage', day: 1, session: 2,
    guidelines: [
      'Individual event.',
      '2 minutes time limit.',
      'No instruments or karaoke allowed.',
      'Lyrics vulgarity results in disqualification.'
    ]
  },

  // OFF STAGE DAY 2
  {
    id: 'off10',
    title: 'Rescue Rush',
    time: 'Day 2 // Session 1',
    sector: 'Speech',
    description: 'Survival-themed shipwreck speech.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMyoG7RbHRN-v-7L9ztIMoS3rfsLBmV1HyjshgXgeEAkCG7aPDQhY5cXFCfwC9OMOET7H0qQgMS9f8Vtpvw0Jz99AawqNDo0AW9FyWMsgE1X0Iz9RtIebIPqd9noXJX3qbWYUmWhWbbekLLOAAY6ol75XGFzdRpGNhc5mIoACIESmGP2cNydh1K0k6UAaCwxUJZX4BK019Dk_HufixPoFdAwuUbg-M_H0Aabwk9oGAYJjrldrpPbRXOLZwYlfsyaDfeNdOtZhLA4',
    location: 'Seminar Hall 1',
    type: 'off-stage', day: 2, session: 1,
    guidelines: [
      'Individual event.',
      '2-3 minutes time limit.',
      'Stage discipline and language maintenance mandatory.'
    ]
  },
  {
    id: 'off11',
    title: 'Minute Mania',
    time: 'Day 2 // Session 1',
    sector: 'Speech',
    description: 'Just A Minute (JAM) challenge.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtmrAyczinbLK3HhlP1GDFHZoDBuudNFU73V9YdTWUOCK9iSBY05F0--zMN66WE4oXfP6c3YS27i92OT-hlMMPr7WFLJ5Tm5g6iCYood_s1h35K1x2ZybO-C5f0DBOexZfiQFyc3HQBGIzZg_gUJIVUji-TKmdNVx9RaiJhuwVczlZ6K2lBS0fqRNJ6w0j76fsC9RFJn9f7RUHAfICJ9KWrYdh8besERb_L8miErnyGPZaC61ErsfleMBIDwFxU21yJYasFkBXjmw',
    location: 'Seminar Hall 2',
    type: 'off-stage', day: 2, session: 1,
    guidelines: [
      'Individual event.',
      '1 minute time limit.',
      'Topic provided on the spot.',
      'No offensive political or religious content.'
    ]
  },
  {
    id: 'off12',
    title: 'Triple X Challenge',
    time: 'Day 2 // Session 1',
    sector: 'Intellectual',
    description: 'Mystery potpourri with three distinct rounds.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-HoNN0spUJR4rjbXoFBK5cS9iGRkZUiWkNOnWQ0OaLJO-zi0rojuM9-0GZrSeGynMUFubh8Cy5jb7apS5-KM6-MKJOehXVly3abBpZcA9fuW-RgTqUbUXrHW2s3bSderdDZZR6YJW1Ldhb_wPYd61M2NeD2aboRKI3CkMALh4bWXb9XOANpczl-nfybKw4TB9moQAETfX1F-PSZYBHxYalHCNGJdPTZ52FsgHsN8NYD7B_4saHmyiFfrhZNUNEHMF932wjicvj0',
    location: 'Lab Beta',
    type: 'off-stage', day: 2, session: 1,
    guidelines: [
      'Team of 2 members.',
      '3 rounds revealed on the spot.',
      'Judgment based on total scores.'
    ]
  },
  {
    id: 'off13',
    title: 'Navarasa Nayagargal',
    time: 'Day 2 // Session 1',
    sector: 'Drama',
    description: 'Intense Tamil drama focusing on expressions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD17mY7gHTMNFu2RY980ZLdguDmnGT2X1RIdCLqj3qizU4rTPY4xJQ4n_aVN_5PWxBPg3onUjO2PGYrzG5sMNZJ8oRqASq8Mk9JigrSsgWYzGNlwZSZ_7S7DaShh9MHt5bHyBWFPot-u_BBaejt3WbzBZGN-AyZpAZid2C3_BRJVBWgD4O7y3WY9rNijuyNnUbCVCFxJn0nhUQ5ioXXft8Nqt-v0efFzCC7UfGeMXkBKcJUYJa9US3THYHbQNbMzsMXASRWClh91Y',
    location: 'Open Theatre',
    type: 'off-stage', day: 2, session: 1,
    guidelines: [
      '6-7 participants per team.',
      '8-10 minutes time limit.',
      'Tamil language only permitted.',
      'No offensive political or religious content.'
    ]
  },
  {
    id: 'off14',
    title: 'Marketra',
    time: 'Day 2 // Session 2',
    sector: 'Business',
    description: 'Creative adzap product promotion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKhJlZUThhUOQ74hGWwufRuvoizfYLYFLNQE3hdicHlgkPZHKoYiA5BGypgFaXXfsYmNpUze5oH22KXVf_k4Vh3uW1flJAGwBzv6SEptjDdZd_Pmfp21o3iN6NFQ4EPde4jfzTH3TYned2K2azmGRFxgUNweOdcd-A732LJ55M63n_u5lLpOi63tEtfhfNFlNpidHZHeU5opdVCvvG4xlcSnw32ONI-QD4jct1MHTpaVVa83Yp4jrfoXU5QpuyXANXx-4wI9Q_1Ro',
    location: 'Workshop Hub',
    type: 'off-stage', day: 2, session: 2,
    guidelines: [
      'Team of 4-5 members.',
      '5 minutes time limit.',
      'Creatively promote given product/idea.'
    ]
  },
  {
    id: 'off15',
    title: 'Brush and Braid',
    time: 'Day 2 // Session 2',
    sector: 'Art',
    description: 'Professional makeup and hair styling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2g3Ct58GhFS1VvsCJ8NcKOeytInt4i4vz8ngATUQdDoQckNgYJsXi20xti3kVUvXXqGqfSGgjUf93oeyHVfd6Al8IZ4agAd9JYcTbmu1COqk1w-wKU6ycW2NzdjT4ez3H_A4m2c4NJJXd1t2Flr86TDMqbtJH9cRIJTf1rodJRHptaND0tNIeWsogspwVrG3CNFzx507tzUktJ57gWaJRu3hN7JzEpnKnxE6BA8zgaFyReRZuXG0wKqk_A3nu_MOauqMT1fSe20',
    location: 'Lab Gamma',
    type: 'off-stage', day: 2, session: 2,
    guidelines: [
      '2 participants (model and artist).',
      'Theme announced on the spot.',
      'Reference images permitted.',
      'Bring own materials.'
    ]
  },
  {
    id: 'off16',
    title: 'Solo Dance',
    time: 'Day 2 // Session 2',
    sector: 'Dance',
    description: 'Competitive individual dance performance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2g3Ct58GhFS1VvsCJ8NcKOeytInt4i4vz8ngATUQdDoQckNgYJsXi20xti3kVUvXXqGqfSGgjUf93oeyHVfd6Al8IZ4agAd9JYcTbmu1COqk1w-wKU6ycW2NzdjT4ez3H_A4m2c4NJJXd1t2Flr86TDMqbtJH9cRIJTf1rodJRHptaND0tNIeWsogspwVrG3CNFzx507tzUktJ57gWaJRu3hN7JzEpnKnxE6BA8zgaFyReRZuXG0wKqk_A3nu_MOauqMT1fSe20',
    location: 'Studio B',
    type: 'off-stage', day: 2, session: 2,
    guidelines: [
      'Individual event.',
      '3 minutes time limit.',
      'Music submitted 2 days prior.'
    ]
  },
  {
    id: 'off17',
    title: 'Hidden Bites',
    time: 'Day 2 // Session 2',
    sector: 'Eat-o-mania',
    description: 'Speed eating competition.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtmrAyczinbLK3HhlP1GDFHZoDBuudNFU73V9YdTWUOCK9iSBY05F0--zMN66WE4oXfP6c3YS27i92OT-hlMMPr7WFLJ5Tm5g6iCYood_s1h35K1x2ZybO-C5f0DBOexZfiQFyc3HQBGIzZg_gUJIVUji-TKmdNVx9RaiJhuwVczlZ6K2lBS0fqRNJ6w0j76fsC9RFJn9f7RUHAfICJ9KWrYdh8besERb_L8miErnyGPZaC61ErsfleMBIDwFxU21yJYasFkBXjmw',
    location: 'Food Court',
    type: 'off-stage', day: 2, session: 2,
    guidelines: [
      'Individual event.',
      '3 minutes time limit.',
      'Food revealed on the spot.',
      'Finishing time determines winner.'
    ]
  },
  {
    id: 'off18',
    title: 'Wheels of Work-out',
    time: 'Day 2 // Session 2',
    sector: 'Fitness',
    description: 'Physical endurance workout challenge.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-HoNN0spUJR4rjbXoFBK5cS9iGRkZUiWkNOnWQ0OaLJO-zi0rojuM9-0GZrSeGynMUFubh8Cy5jb7apS5-KM6-MKJOehXVly3abBpZcA9fuW-RgTqUbUXrHW2s3bSderdDZZR6YJW1Ldhb_wPYd61M2NeD2aboRKI3CkMALh4bWXb9XOANpczl-nfybKw4TB9moQAETfX1F-PSZYBHxYalHCNGJdPTZ52FsgHsN8NYD7B_4saHmyiFfrhZNUNEHMF932wjicvj0',
    location: 'Sports Field',
    type: 'off-stage', day: 2, session: 2,
    guidelines: [
      'Individual event.',
      '3 intense rounds.',
      'Tasks revealed on the spot.'
    ]
  },

  // ONLINE
  {
    id: 'on1',
    title: 'Reel Making',
    time: 'Submission',
    sector: 'Digital',
    description: 'Short form video creation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD17mY7gHTMNFu2RY980ZLdguDmnGT2X1RIdCLqj3qizU4rTPY4xJQ4n_aVN_5PWxBPg3onUjO2PGYrzG5sMNZJ8oRqASq8Mk9JigrSsgWYzGNlwZSZ_7S7DaShh9MHt5bHyBWFPot-u_BBaejt3WbzBZGN-AyZpAZid2C3_BRJVBWgD4O7y3WY9rNijuyNnUbCVCFxJn0nhUQ5ioXXft8Nqt-v0efFzCC7UfGeMXkBKcJUYJa9US3THYHbQNbMzsMXASRWClh91Y',
    location: 'Remote',
    type: 'online',
    guidelines: [
      'Participate as team or individual.',
      'Adherence to theme mandatory.',
      'Submit 2 days prior to event.',
      'No offensive political or religious content.'
    ]
  },
  {
    id: 'on2',
    title: 'Short Film',
    time: 'Submission',
    sector: 'Digital',
    description: 'Cinematic storytelling challenge.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMyoG7RbHRN-v-7L9ztIMoS3rfsLBmV1HyjshgXgeEAkCG7aPDQhY5cXFCfwC9OMOET7H0qQgMS9f8Vtpvw0Jz99AawqNDo0AW9FyWMsgE1X0Iz9RtIebIPqd9noXJX3qbWYUmWhWbbekLLOAAY6ol75XGFzdRpGNhc5mIoACIESmGP2cNydh1K0k6UAaCwxUJZX4BK019Dk_HufixPoFdAwuUbg-M_H0Aabwk9oGAYJjrldrpPbRXOLZwYlfsyaDfeNdOtZhLA4',
    location: 'Remote',
    type: 'online',
    guidelines: [
      'Participate as team or individual.',
      'Adherence to theme mandatory.',
      'Submit 2 days prior to event.',
      'No offensive political or religious content.'
    ]
  },
  {
    id: 'on3',
    title: 'Photography',
    time: 'Submission',
    sector: 'Digital',
    description: 'Static visual capture challenge.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeDELBIm4zuG2rw2wRve_5YaNW0bkElHwirscq9Pjv78V8i2qpKvyHFd8Tv7ZGkRfGKcN94VPVh1GSoKS0CwvxyTXmDoLYIqoghnE0AFZmu-zLJ_3qjEfJaiBY5y99w5pOP_dtwF-W7GFpajA2XQo8nOcTuXSR6u4kvellFvyfKeAj0C6QOZgnAHTdmc2v3guY4xVkmHppRYFftfDpmmk-IexVQ3pw4poaAYqNZ3hLSywI4klqCxIRiTsfLatoSl9Yu8q5zAyGeFM',
    location: 'Remote',
    type: 'online',
    guidelines: [
      'Participate as team or individual.',
      'Adherence to theme mandatory.',
      'Submit 2 days prior to event.'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'AMARNATH R',
    role: 'Strategic Oversight',
    specialization: 'System Leadership',
    directive: 'Orchestrate Synergy',
    level: 'Commander',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMyoG7RbHRN-v-7L9ztIMoS3rfsLBmV1HyjshgXgeEAkCG7aPDQhY5cXFCfwC9OMOET7H0qQgMS9f8Vtpvw0Jz99AawqNDo0AW9FyWMsgE1X0Iz9RtIebIPqd9noXJX3qbWYUmWhWbbekLLOAAY6ol75XGFzdRpGNhc5mIoACIESmGP2cNydh1K0k6UAaCwxUJZX4BK019Dk_HufixPoFdAwuUbg-M_H0Aabwk9oGAYJjrldrpPbRXOLZwYlfsyaDfeNdOtZhLA4'
  },
  {
    id: 't2',
    name: 'ZAFANA AASMI',
    role: 'Tactical Operations',
    specialization: 'Resource Co-ordination',
    directive: 'Execute Mission Params',
    level: 'Director',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeDELBIm4zuG2rw2wRve_5YaNW0bkElHwirscq9Pjv78V8i2qpKvyHFd8Tv7ZGkRfGKcN94VPVh1GSoKS0CwvxyTXmDoLYIqoghnE0AFZmu-zLJ_3qjEfJaiBY5y99w5pOP_dtwF-W7GFpajA2XQo8nOcTuXSR6u4kvellFvyfKeAj0C6QOZgnAHTdmc2v3guY4xVkmHppRYFftfDpmmk-IexVQ3pw4poaAYqNZ3hLSywI4klqCxIRiTsfLatoSl9Yu8q5zAyGeFM'
  },
  {
    id: 't3',
    name: 'BINO BALA',
    role: 'Ground Support',
    specialization: 'Peripheral Security',
    directive: 'Ensure Security',
    level: 'Elite',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7aZoJHtqkUHegj1V8DP3DAc-LIEsffkXRUaa2rLmciygse6A3Fi1LzKjB-SYCzrkj4QIuTsjvVNPIqp8vnDOIdIX3Fvlj9dNn_fXoS5nIe90VZJGnjh9VvDqA_LIIQloiLxwrMToFcZmPLUVVc4w0NckzjmnWa1-60mc7E6AHi2RDjlYR8ow3Ef0rYeH5FWGG4Oo9qaBjv248xbMgSW-xxiw9l486hNmBh8TBghHJgtS_MDYjX9D0Dw6DgxNsKysa-h_hdjizIAc'
  },
  {
    id: 't4',
    name: 'GOWSHIK KP',
    role: 'Digital Architecture',
    specialization: 'User Interface',
    directive: 'Visual Dominance',
    level: 'Architect',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4C65u5CJ3N6onR09UkLx7Yt56494HQGLwQir5Fkv1afGsUGIT6Bf_1A4Lf6XikjF3hEMLUtwJtuhrnGpKNQKWU0YfoXMOfJF0Vs4N6fUXabMuYDlv_Mb2uaW1Fww9dpMHMBRBMuTK0sWC-gemCw2gqqVC8tdIFmJ2MmRMx_UKFTY9CZU_jQr-FZgzZydopGnWmPuqgVWirWKQfW89ISLOVKnAS8G-jSb6gQ7bLpP0_GE4hjFqbA3Qq5onTdvXSpgNomGLOUsGgZo'
  }
];

export const TANTRA_LOGO = (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
    <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
  </svg>
);
