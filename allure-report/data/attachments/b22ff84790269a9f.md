# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_showtimes&tickets.spec.js >> IMDb Showtimes & Tickets >> Movie page loads successfully
- Location: tests\imdb_showtimes&tickets.spec.js:17:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "Home" [ref=e4] [cursor=pointer]:
      - /url: /?ref_=tt_nv_home
      - img [ref=e5]
    - generic "Open navigation drawer" [ref=e14] [cursor=pointer]:
      - generic [ref=e17]: Menu
    - search [ref=e19]:
      - generic "All" [ref=e23] [cursor=pointer]:
        - generic [ref=e24]: All
      - generic [ref=e27]:
        - combobox [ref=e28]:
          - textbox "Search IMDb" [ref=e29]
          - listbox
        - status [ref=e30]
      - button "Submit search" [ref=e31] [cursor=pointer]
    - link "Go To IMDb Pro" [ref=e36] [cursor=pointer]:
      - /url: https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm
      - img [ref=e39]
    - link "Watchlist" [ref=e51] [cursor=pointer]:
      - /url: /list/watchlist/?ref_=tt_nv_urwls_all
      - generic [ref=e53]: Watchlist
    - link "Sign in" [ref=e55] [cursor=pointer]:
      - /url: /registration/signin/?u=&ref_=tt_nv_generic_lgin
      - generic [ref=e56]: Sign in
    - generic "Toggle language selector" [ref=e59] [cursor=pointer]:
      - generic [ref=e61]: EN
    - status
    - status
  - main [ref=e64]:
    - generic [ref=e65]:
      - generic [ref=e75]:
        - generic [ref=e77]:
          - link "Cast & crew" [ref=e78] [cursor=pointer]:
            - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_ql_1
          - link "User reviews" [ref=e79] [cursor=pointer]:
            - /url: /title/tt0111161/reviews/?ref_=tt_ov_ql_2
          - link "Trivia" [ref=e80] [cursor=pointer]:
            - /url: /title/tt0111161/trivia/?ref_=tt_ov_ql_3
          - link "FAQ" [ref=e81] [cursor=pointer]:
            - /url: /title/tt0111161/faq/?ref_=tt_ov_ql_4
          - link "IMDbPro" [ref=e83] [cursor=pointer]:
            - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
          - button "View all topics" [ref=e84] [cursor=pointer]:
            - generic [ref=e86]: All topics
          - button "Share on social media" [ref=e88] [cursor=pointer]
        - generic [ref=e91]:
          - generic [ref=e92]:
            - heading "The Shawshank Redemption" [level=1] [ref=e93]
            - link "1994" [ref=e94] [cursor=pointer]:
              - /url: /title/tt0111161/releaseinfo/?ref_=tt_ov_rdat
            - link "R" [ref=e95] [cursor=pointer]:
              - /url: /title/tt0111161/parentalguide/?ref_=tt_ov_pg#certificates
            - text: 2h 22m
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]: IMDb RATING
              - link "View User Ratings" [ref=e100] [cursor=pointer]:
                - /url: /title/tt0111161/ratings/?ref_=tt_ov_rat
                - generic [ref=e105]:
                  - generic [ref=e106]:
                    - generic [ref=e107]: "9.3"
                    - generic [ref=e108]: /10
                  - generic [ref=e109]: 3.2M
            - generic [ref=e110]:
              - generic [ref=e111]: YOUR RATING
              - button "Rate The Shawshank Redemption" [ref=e112] [cursor=pointer]:
                - generic [ref=e119]: Rate
            - generic [ref=e120]:
              - generic [ref=e121]: POPULARITY
              - link "View Popular Movies" [ref=e122] [cursor=pointer]:
                - /url: /chart/moviemeter/?ref_=tt_ov_pop
                - generic [ref=e127]:
                  - generic [ref=e128]: "37"
                  - generic [ref=e129]: "6"
        - generic [ref=e132]:
          - generic [ref=e133]:
            - group [ref=e135]:
              - img "Tim Robbins in The Shawshank Redemption (1994)" [ref=e137]
              - button "Add to Watchlist" [ref=e138] [cursor=pointer]
              - link "View ’The Shawshank Redemption’ Poster" [ref=e143] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i
            - generic [ref=e145]:
              - button "Video Preview Preference" [ref=e147] [cursor=pointer]
              - group [ref=e149] [cursor=pointer]:
                - img "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." [ref=e151]
                - generic [ref=e159]: Play trailer2:11
            - generic [ref=e163]:
              - link "6 Videos" [ref=e164] [cursor=pointer]:
                - /url: /title/tt0111161/videogallery/?ref_=tt_ov_vi_sm
                - generic [ref=e168]: 6 Videos
              - link "99+ Photos" [ref=e169] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ov_m_sm
                - generic [ref=e174]: 99+ Photos
          - generic [ref=e175]:
            - generic [ref=e177]:
              - generic [ref=e179]:
                - link "Epic" [ref=e180] [cursor=pointer]:
                  - /url: /interest/in0000077/?ref_=tt_ov_in_1
                  - generic [ref=e181]: Epic
                - link "Period Drama" [ref=e182] [cursor=pointer]:
                  - /url: /interest/in0000083/?ref_=tt_ov_in_2
                  - generic [ref=e183]: Period Drama
                - link "Prison Drama" [ref=e184] [cursor=pointer]:
                  - /url: /interest/in0000085/?ref_=tt_ov_in_3
                  - generic [ref=e185]: Prison Drama
                - link "Psychological Drama" [ref=e186] [cursor=pointer]:
                  - /url: /interest/in0000086/?ref_=tt_ov_in_4
                  - generic [ref=e187]: Psychological Drama
                - link "Drama" [ref=e188] [cursor=pointer]:
                  - /url: /interest/in0000076/?ref_=tt_ov_in_5
                  - generic [ref=e189]: Drama
              - paragraph [ref=e190]:
                - generic [ref=e191]: A wrongfully convicted banker forms a close friendship with a hardened convict over a quarter century while retaining his humanity through simple acts of compassion.
              - generic [ref=e192]:
                - generic [ref=e193]: Director
                - link "Frank Darabont" [ref=e195] [cursor=pointer]:
                  - /url: /name/nm0001104/?ref_=tt_ov_1_1
                - generic [ref=e196]: Writers
                - generic [ref=e197]:
                  - link "Stephen King" [ref=e198] [cursor=pointer]:
                    - /url: /name/nm0000175/?ref_=tt_ov_2_1
                  - link "Frank Darabont" [ref=e199] [cursor=pointer]:
                    - /url: /name/nm0001104/?ref_=tt_ov_2_2
                - link "See full cast and crew" [ref=e200] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                  - text: Stars
                - generic [ref=e201] [cursor=pointer]:
                  - link "Tim Robbins" [ref=e202]:
                    - /url: /name/nm0000209/?ref_=tt_ov_3_1
                  - link "Morgan Freeman" [ref=e203]:
                    - /url: /name/nm0000151/?ref_=tt_ov_3_2
                  - link "Bob Gunton" [ref=e204]:
                    - /url: /name/nm0348409/?ref_=tt_ov_3_3
                - link "See full cast and crew" [ref=e205] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
              - generic [ref=e209]:
                - link "Go to IMDbPro" [ref=e210] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                  - img [ref=e211]
                - link "See production info at IMDbPro" [ref=e221] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                  - text: See production info at IMDbPro
            - generic [ref=e223]:
              - generic [ref=e225]:
                - generic [ref=e226] [cursor=pointer]:
                  - button "Add to Watchlist Added by 1.7M users" [ref=e227]:
                    - generic [ref=e229]:
                      - generic [ref=e230]: Add to Watchlist
                      - generic [ref=e231]: Added by 1.7M users
                  - button "Add title to another list" [ref=e232]
                - button "Loading" [ref=e235] [cursor=pointer]
              - link "11.8K User reviews" [ref=e237] [cursor=pointer]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ov_ururv
                - generic [ref=e238]:
                  - generic [ref=e239]: 11.8K
                  - generic [ref=e240]: User reviews
              - link "154 Critic reviews" [ref=e241] [cursor=pointer]:
                - /url: /title/tt0111161/externalreviews/?ref_=tt_ov_crv
                - generic [ref=e242]:
                  - generic [ref=e243]: "154"
                  - generic [ref=e244]: Critic reviews
              - link "82 Metascore" [ref=e245] [cursor=pointer]:
                - /url: /title/tt0111161/criticreviews/?ref_=tt_ov_msc
                - generic [ref=e246]:
                  - generic [ref=e248]: "82"
                  - generic [ref=e249]: Metascore
      - generic [ref=e251]:
        - generic [ref=e252]:
          - generic [ref=e258]:
            - 'link "Top rated movie #1" [ref=e260] [cursor=pointer]':
              - /url: /chart/top/?ref_=tt_awd
            - link "See more awards and nominations" [ref=e261] [cursor=pointer]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
              - text: Nominated for 7 Oscars
            - generic [ref=e262] [cursor=pointer]: 21 wins & 43 nominations total
            - link "See more awards and nominations" [ref=e263] [cursor=pointer]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
          - generic [ref=e270]:
            - link "Videos 6" [ref=e272] [cursor=pointer]:
              - /url: /title/tt0111161/videogallery/?ref_=tt_vids_sm
              - heading "Videos 6" [level=3] [ref=e273]:
                - text: Videos
                - generic [ref=e274]: "6"
            - generic [ref=e277]:
              - group [ref=e278]:
                - group [ref=e279]:
                  - img "Official Trailer" [ref=e281]
                  - link "TrailerOfficial Trailer" [ref=e282] [cursor=pointer]:
                    - /url: /video/vi3877612057/?ref_=tt_vids_vi_1
                    - generic [ref=e287]: Trailer 2:11
                - link "TrailerOfficial Trailer" [ref=e290] [cursor=pointer]:
                  - /url: /video/vi3877612057/?ref_=tt_vids_vi_t_1
                  - generic [ref=e291]: Official Trailer
              - group [ref=e294]:
                - group [ref=e295]:
                  - generic [ref=e296]:
                    - img "Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films"
                  - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e297] [cursor=pointer]:
                    - /url: /video/vi976077081/?ref_=tt_vids_vi_2
                    - generic [ref=e302]: Clip 8:43
                - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e305] [cursor=pointer]:
                  - /url: /video/vi976077081/?ref_=tt_vids_vi_t_2
                  - generic [ref=e306]: Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films
            - group [ref=e310]:
              - generic [ref=e311]:
                - group [ref=e312]:
                  - group [ref=e313]:
                    - generic [ref=e314]:
                      - img "'The Shawshank Redemption' | Anniversary Mashup"
                    - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e315] [cursor=pointer]:
                      - /url: /video/vi2425798425/?ref_=tt_vids_vi_3
                      - generic [ref=e320]: Clip 1:01
                  - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e323] [cursor=pointer]:
                    - /url: /video/vi2425798425/?ref_=tt_vids_vi_t_3
                    - generic [ref=e324]: "'The Shawshank Redemption' | Anniversary Mashup"
                - group [ref=e327]:
                  - group [ref=e328]:
                    - generic [ref=e329]:
                      - img "What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson"
                    - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e330] [cursor=pointer]:
                      - /url: /video/vi2910632473/?ref_=tt_vids_vi_4
                      - generic [ref=e335]: Video 1:55
                  - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e338] [cursor=pointer]:
                    - /url: /video/vi2910632473/?ref_=tt_vids_vi_t_4
                    - generic [ref=e339]: What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson
                - group [ref=e342]:
                  - group [ref=e343]:
                    - generic [ref=e344]:
                      - img "Who Else Almost Starred In 'The Shawshank Redemption?'"
                    - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e345] [cursor=pointer]:
                      - /url: /video/vi2032974361/?ref_=tt_vids_vi_5
                      - generic [ref=e350]: Video 2:25
                  - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e353] [cursor=pointer]:
                    - /url: /video/vi2032974361/?ref_=tt_vids_vi_t_5
                    - generic [ref=e354]: Who Else Almost Starred In 'The Shawshank Redemption?'
                - group [ref=e357]:
                  - group [ref=e358]:
                    - generic [ref=e359]:
                      - img "Roles That Tom Cruise Turned Down"
                    - link "VideoRoles That Tom Cruise Turned Down" [ref=e360] [cursor=pointer]:
                      - /url: /video/vi1874967321/?ref_=tt_vids_vi_6
                      - generic [ref=e365]: Video 2:22
                  - link "VideoRoles That Tom Cruise Turned Down" [ref=e368] [cursor=pointer]:
                    - /url: /video/vi1874967321/?ref_=tt_vids_vi_t_6
                    - generic [ref=e369]: Roles That Tom Cruise Turned Down
          - generic [ref=e372]:
            - generic [ref=e374]:
              - link "Photos 565" [ref=e375] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_sm
                - heading "Photos 565" [level=3] [ref=e376]:
                  - text: Photos
                  - generic [ref=e377]: "565"
              - button "Add photo" [ref=e380] [cursor=pointer]:
                - generic [ref=e382]: Add photo
            - generic [ref=e383]:
              - generic [ref=e384]:
                - link "View Poster" [ref=e385] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_1
                  - img "View Poster" [ref=e387]
                - link "View Poster" [ref=e388] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2954723328/?ref_=tt_ph_2
                  - img "View Poster" [ref=e390]
                - link "View Poster" [ref=e391] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3206381568/?ref_=tt_ph_3
                  - img "View Poster" [ref=e393]
              - generic [ref=e394]:
                - link "View Poster" [ref=e395] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3172827136/?ref_=tt_ph_1_1
                  - img "View Poster" [ref=e397]
                - link "View Poster" [ref=e398] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3156049920/?ref_=tt_ph_1_2
                  - img "View Poster" [ref=e400]
                - link "View Poster" [ref=e401] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3139272704/?ref_=tt_ph_1_3
                  - img "View Poster" [ref=e403]
                - link "+ 559 View Poster" [ref=e404] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3122495488/?ref_=tt_ph_more
                  - generic [ref=e405]: + 559
                  - img "View Poster" [ref=e407]
          - generic [ref=e412]:
            - generic [ref=e414]:
              - link "Top Cast 74" [ref=e415] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                - heading "Top Cast 74" [level=3] [ref=e416]:
                  - generic [ref=e417]: Top Cast
                  - generic [ref=e418]: "74"
              - 'button "Top Cast: edit" [ref=e421] [cursor=pointer]':
                - generic [ref=e424]: Edit
            - group [ref=e425]:
              - generic [ref=e426]:
                - generic [ref=e427]:
                  - group [ref=e429]:
                    - generic [ref=e430]:
                      - img "Tim Robbins"
                    - button "Add Tim Robbins to favorite people" [ref=e431] [cursor=pointer]
                    - link "Go to Tim Robbins" [ref=e434] [cursor=pointer]:
                      - /url: /name/nm0000209/?ref_=tt_cst_i_1
                  - generic [ref=e436]:
                    - link "Tim Robbins" [ref=e437] [cursor=pointer]:
                      - /url: /name/nm0000209/?ref_=tt_cst_t_1
                    - link "Andy Dufresne" [ref=e439] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000209/?ref_=tt_cst_c_1
                - generic [ref=e440]:
                  - group [ref=e442]:
                    - generic [ref=e443]:
                      - img "Morgan Freeman"
                    - button "Add Morgan Freeman to favorite people" [ref=e444] [cursor=pointer]
                    - link "Go to Morgan Freeman" [ref=e447] [cursor=pointer]:
                      - /url: /name/nm0000151/?ref_=tt_cst_i_2
                  - generic [ref=e449]:
                    - link "Morgan Freeman" [ref=e450] [cursor=pointer]:
                      - /url: /name/nm0000151/?ref_=tt_cst_t_2
                    - link "Ellis Boyd 'Red' Redding" [ref=e452] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000151/?ref_=tt_cst_c_2
                - generic [ref=e453]:
                  - group [ref=e455]:
                    - generic [ref=e456]:
                      - img "Bob Gunton"
                    - button "Add Bob Gunton to favorite people" [ref=e457] [cursor=pointer]
                    - link "Go to Bob Gunton" [ref=e460] [cursor=pointer]:
                      - /url: /name/nm0348409/?ref_=tt_cst_i_3
                  - generic [ref=e462]:
                    - link "Bob Gunton" [ref=e463] [cursor=pointer]:
                      - /url: /name/nm0348409/?ref_=tt_cst_t_3
                    - link "Warden Norton" [ref=e465] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0348409/?ref_=tt_cst_c_3
                - generic [ref=e466]:
                  - group [ref=e468]:
                    - generic [ref=e469]:
                      - img "William Sadler"
                    - button "Add William Sadler to favorite people" [ref=e470] [cursor=pointer]
                    - link "Go to William Sadler" [ref=e473] [cursor=pointer]:
                      - /url: /name/nm0006669/?ref_=tt_cst_i_4
                  - generic [ref=e475]:
                    - link "William Sadler" [ref=e476] [cursor=pointer]:
                      - /url: /name/nm0006669/?ref_=tt_cst_t_4
                    - link "Heywood" [ref=e478] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0006669/?ref_=tt_cst_c_4
                - generic [ref=e479]:
                  - group [ref=e481]:
                    - generic [ref=e482]:
                      - img "Clancy Brown"
                    - button "Add Clancy Brown to favorite people" [ref=e483] [cursor=pointer]
                    - link "Go to Clancy Brown" [ref=e486] [cursor=pointer]:
                      - /url: /name/nm0000317/?ref_=tt_cst_i_5
                  - generic [ref=e488]:
                    - link "Clancy Brown" [ref=e489] [cursor=pointer]:
                      - /url: /name/nm0000317/?ref_=tt_cst_t_5
                    - link "Captain Hadley" [ref=e491] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000317/?ref_=tt_cst_c_5
                - generic [ref=e492]:
                  - group [ref=e494]:
                    - generic [ref=e495]:
                      - img "Gil Bellows"
                    - button "Add Gil Bellows to favorite people" [ref=e496] [cursor=pointer]
                    - link "Go to Gil Bellows" [ref=e499] [cursor=pointer]:
                      - /url: /name/nm0004743/?ref_=tt_cst_i_6
                  - generic [ref=e501]:
                    - link "Gil Bellows" [ref=e502] [cursor=pointer]:
                      - /url: /name/nm0004743/?ref_=tt_cst_t_6
                    - link "Tommy" [ref=e504] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0004743/?ref_=tt_cst_c_6
                - generic [ref=e505]:
                  - group [ref=e507]:
                    - generic [ref=e508]:
                      - img "Mark Rolston"
                    - button "Add Mark Rolston to favorite people" [ref=e509] [cursor=pointer]
                    - link "Go to Mark Rolston" [ref=e512] [cursor=pointer]:
                      - /url: /name/nm0001679/?ref_=tt_cst_i_7
                  - generic [ref=e514]:
                    - link "Mark Rolston" [ref=e515] [cursor=pointer]:
                      - /url: /name/nm0001679/?ref_=tt_cst_t_7
                    - link "Bogs Diamond" [ref=e517] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0001679/?ref_=tt_cst_c_7
                - generic [ref=e518]:
                  - group [ref=e520]:
                    - generic [ref=e521]:
                      - img "James Whitmore"
                    - button "Add James Whitmore to favorite people" [ref=e522] [cursor=pointer]
                    - link "Go to James Whitmore" [ref=e525] [cursor=pointer]:
                      - /url: /name/nm0926235/?ref_=tt_cst_i_8
                  - generic [ref=e527]:
                    - link "James Whitmore" [ref=e528] [cursor=pointer]:
                      - /url: /name/nm0926235/?ref_=tt_cst_t_8
                    - link "Brooks Hatlen" [ref=e530] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0926235/?ref_=tt_cst_c_8
                - generic [ref=e531]:
                  - group [ref=e533]:
                    - generic [ref=e534]:
                      - img "Jeffrey DeMunn"
                    - button "Add Jeffrey DeMunn to favorite people" [ref=e535] [cursor=pointer]
                    - link "Go to Jeffrey DeMunn" [ref=e538] [cursor=pointer]:
                      - /url: /name/nm0218810/?ref_=tt_cst_i_9
                  - generic [ref=e540]:
                    - link "Jeffrey DeMunn" [ref=e541] [cursor=pointer]:
                      - /url: /name/nm0218810/?ref_=tt_cst_t_9
                    - link "1946 D.A." [ref=e543] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0218810/?ref_=tt_cst_c_9
                - generic [ref=e544]:
                  - group [ref=e546]:
                    - generic [ref=e547]:
                      - img "Larry Brandenburg"
                    - button "Add Larry Brandenburg to favorite people" [ref=e548] [cursor=pointer]
                    - link "Go to Larry Brandenburg" [ref=e551] [cursor=pointer]:
                      - /url: /name/nm0104594/?ref_=tt_cst_i_10
                  - generic [ref=e553]:
                    - link "Larry Brandenburg" [ref=e554] [cursor=pointer]:
                      - /url: /name/nm0104594/?ref_=tt_cst_t_10
                    - link "Skeet" [ref=e556] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0104594/?ref_=tt_cst_c_10
                - generic [ref=e557]:
                  - group [ref=e559]:
                    - generic [ref=e560]:
                      - img "Neil Giuntoli"
                    - button "Add Neil Giuntoli to favorite people" [ref=e561] [cursor=pointer]
                    - link "Go to Neil Giuntoli" [ref=e564] [cursor=pointer]:
                      - /url: /name/nm0321358/?ref_=tt_cst_i_11
                  - generic [ref=e566]:
                    - link "Neil Giuntoli" [ref=e567] [cursor=pointer]:
                      - /url: /name/nm0321358/?ref_=tt_cst_t_11
                    - link "Jigger" [ref=e569] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0321358/?ref_=tt_cst_c_11
                - generic [ref=e570]:
                  - group [ref=e572]:
                    - generic [ref=e573]:
                      - img "Brian Libby"
                    - button "Add Brian Libby to favorite people" [ref=e574] [cursor=pointer]
                    - link "Go to Brian Libby" [ref=e577] [cursor=pointer]:
                      - /url: /name/nm0508742/?ref_=tt_cst_i_12
                  - generic [ref=e579]:
                    - link "Brian Libby" [ref=e580] [cursor=pointer]:
                      - /url: /name/nm0508742/?ref_=tt_cst_t_12
                    - link "Floyd" [ref=e582] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0508742/?ref_=tt_cst_c_12
                - generic [ref=e583]:
                  - group [ref=e585]:
                    - generic [ref=e586]:
                      - img "David Proval"
                    - button "Add David Proval to favorite people" [ref=e587] [cursor=pointer]
                    - link "Go to David Proval" [ref=e590] [cursor=pointer]:
                      - /url: /name/nm0698998/?ref_=tt_cst_i_13
                  - generic [ref=e592]:
                    - link "David Proval" [ref=e593] [cursor=pointer]:
                      - /url: /name/nm0698998/?ref_=tt_cst_t_13
                    - link "Snooze" [ref=e595] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0698998/?ref_=tt_cst_c_13
                - generic [ref=e596]:
                  - group [ref=e598]:
                    - generic [ref=e599]:
                      - img "Joseph Ragno"
                    - button "Add Joseph Ragno to favorite people" [ref=e600] [cursor=pointer]
                    - link "Go to Joseph Ragno" [ref=e603] [cursor=pointer]:
                      - /url: /name/nm0706554/?ref_=tt_cst_i_14
                  - generic [ref=e605]:
                    - link "Joseph Ragno" [ref=e606] [cursor=pointer]:
                      - /url: /name/nm0706554/?ref_=tt_cst_t_14
                    - link "Ernie" [ref=e608] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0706554/?ref_=tt_cst_c_14
                - generic [ref=e609]:
                  - group [ref=e611]:
                    - generic [ref=e612]:
                      - img "Jude Ciccolella"
                    - button "Add Jude Ciccolella to favorite people" [ref=e613] [cursor=pointer]
                    - link "Go to Jude Ciccolella" [ref=e616] [cursor=pointer]:
                      - /url: /name/nm0161980/?ref_=tt_cst_i_15
                  - generic [ref=e618]:
                    - link "Jude Ciccolella" [ref=e619] [cursor=pointer]:
                      - /url: /name/nm0161980/?ref_=tt_cst_t_15
                    - link "Guard Mert" [ref=e621] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0161980/?ref_=tt_cst_c_15
                - generic [ref=e622]:
                  - group [ref=e624]:
                    - generic [ref=e625]:
                      - img "Paul McCrane"
                    - button "Add Paul McCrane to favorite people" [ref=e626] [cursor=pointer]
                    - link "Go to Paul McCrane" [ref=e629] [cursor=pointer]:
                      - /url: /name/nm0005204/?ref_=tt_cst_i_16
                  - generic [ref=e631]:
                    - link "Paul McCrane" [ref=e632] [cursor=pointer]:
                      - /url: /name/nm0005204/?ref_=tt_cst_t_16
                    - link "Guard Trout" [ref=e634] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0005204/?ref_=tt_cst_c_16
                - generic [ref=e635]:
                  - group [ref=e637]:
                    - img [ref=e639]
                    - button "Add Renee Blaine to favorite people" [ref=e641] [cursor=pointer]
                    - link "Go to Renee Blaine" [ref=e644] [cursor=pointer]:
                      - /url: /name/nm0086169/?ref_=tt_cst_i_17
                  - generic [ref=e646]:
                    - link "Renee Blaine" [ref=e647] [cursor=pointer]:
                      - /url: /name/nm0086169/?ref_=tt_cst_t_17
                    - link "Andy Dufresne's Wife" [ref=e649] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0086169/?ref_=tt_cst_c_17
                - generic [ref=e650]:
                  - group [ref=e652]:
                    - img [ref=e654]
                    - button "Add Scott Mann to favorite people" [ref=e656] [cursor=pointer]
                    - link "Go to Scott Mann" [ref=e659] [cursor=pointer]:
                      - /url: /name/nm0542957/?ref_=tt_cst_i_18
                  - generic [ref=e661]:
                    - link "Scott Mann" [ref=e662] [cursor=pointer]:
                      - /url: /name/nm0542957/?ref_=tt_cst_t_18
                    - link "Glenn Quentin" [ref=e664] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0542957/?ref_=tt_cst_c_18
            - generic [ref=e665]: Director
            - link "Frank Darabont" [ref=e667] [cursor=pointer]:
              - /url: /name/nm0001104/?ref_=tt_cst_1_1
            - generic [ref=e668]: Writers
            - generic [ref=e669]:
              - link "Stephen King" [ref=e670] [cursor=pointer]:
                - /url: /name/nm0000175/?ref_=tt_cst_2_1
              - link "Frank Darabont" [ref=e671] [cursor=pointer]:
                - /url: /name/nm0001104/?ref_=tt_cst_2_2
            - link "See full cast and crew" [ref=e672] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
              - text: All cast & crew
            - link "See full cast and crew" [ref=e673] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
            - link "Production, box office & more at IMDbPro" [ref=e676] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - link "Production, box office & more at IMDbPro" [ref=e677] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
          - generic [ref=e679]:
            - generic [ref=e681]:
              - link "User reviews 11.8K" [ref=e682] [cursor=pointer]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ururv_sm
                - heading "User reviews 11.8K" [level=3] [ref=e683]:
                  - generic [ref=e684]: User reviews
                  - generic [ref=e685]: 11.8K
              - button "Review" [ref=e688] [cursor=pointer]:
                - generic [ref=e690]: Review
            - generic [ref=e691]:
              - generic [ref=e692]:
                - generic [ref=e695]: "9.3"
                - generic [ref=e696]: 3192.1K
              - generic [ref=e698]:
                - link "44007 1-star reviews. Select to read them." [ref=e699] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=1&ref_=tt_ururv_histo_1
                  - generic [ref=e703]: "1"
                - link "5668 2-star reviews. Select to read them." [ref=e704] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=2&ref_=tt_ururv_histo_2
                  - generic [ref=e708]: "2"
                - link "6154 3-star reviews. Select to read them." [ref=e709] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=3&ref_=tt_ururv_histo_3
                  - generic [ref=e713]: "3"
                - link "8402 4-star reviews. Select to read them." [ref=e714] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=4&ref_=tt_ururv_histo_4
                  - generic [ref=e718]: "4"
                - link "17864 5-star reviews. Select to read them." [ref=e719] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=5&ref_=tt_ururv_histo_5
                  - generic [ref=e723]: "5"
                - link "35018 6-star reviews. Select to read them." [ref=e724] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=6&ref_=tt_ururv_histo_6
                  - generic [ref=e728]: "6"
                - link "118403 7-star reviews. Select to read them." [ref=e729] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=7&ref_=tt_ururv_histo_7
                  - generic [ref=e733]: "7"
                - link "376585 8-star reviews. Select to read them." [ref=e734] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=8&ref_=tt_ururv_histo_8
                  - generic [ref=e738]: "8"
                - link "827405 9-star reviews. Select to read them." [ref=e739] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=9&ref_=tt_ururv_histo_9
                  - generic [ref=e743]: "9"
                - link "1752635 10-star reviews. Select to read them." [ref=e744] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=10&ref_=tt_ururv_histo_10
                  - generic [ref=e748]: "10"
            - heading "Featured reviews" [level=3] [ref=e751]
            - group [ref=e752]:
              - generic [ref=e753]:
                - generic [ref=e754] [cursor=pointer]:
                  - generic [ref=e755]:
                    - link "User EyeDunno" [ref=e757]:
                      - /url: /user/p.ton3wb3dr2el6lwp5pftz2illm/?ref_=tt_ururv_c_1_uname
                      - generic [ref=e758]:
                        - group [ref=e759]:
                          - generic [ref=e761]:
                            - img "Avatar"
                        - generic [ref=e764]: EyeDunno
                    - generic "Author rating is 10" [ref=e765]:
                      - generic [ref=e767]: "10"
                  - link "Don't Rent Shawshank." [ref=e769]:
                    - /url: /title/tt0111161/reviews/?featured=rw1221355&ref_=tt_ururv_c_1_hd
                    - heading "Don't Rent Shawshank." [level=3] [ref=e770]
                  - text: I'm trying to save you money; this is the last film title that you should consider borrowing. Renting Shawshank will cost you five bucks... just plunk down the $25 and own the title. You'll wind up going back to this gem time and time again. This is one of few movies that are truly timeless. And it's entertaining and moving, no matter how many times you view it.
                  - text: Forget about what others (including myself) might suggest you'll discover in "The Shawshank Redemption;" when you watch it, you'll identify something very personal in your own life with a scene, a character, or a moment in this uncomplicated movie. When you need hope, you'll look for Shawshank. When you want to believe in the will of overcoming even the greatest obstacles, Shawshank will uplift you in ways that you can't find in movies today.
                  - text: Some liken the film to some kind of spiritual awakening. Of course, some can go to a church or mosque to find enlightenment and Faith in humanity, but most places of worship are open only certain days or times. But when you need affirmation of the lasting bond of friendships that prevail over the most dire circumstances, Shawshank will give it to you. It makes grown men (like me) cry, still. I wonder whether Shawshank was truly meant for viewing in the privacy of the home, because it is a personal experience that really makes you look inward. Nominated for seven, this is the best film that never one a single Oscar.
                  - text: How ironic that an innocent man winds up being surrounded by the corruption of the legal system. Shawshank itself is similar to the character of Andy Dufresne. Prejudging this classic film, critics couldn't get past the title. The public followed suit, initially dismissing Shawshank, which failed in the box office just like "It's a Wonderful Life" and "Citizen Kane." It could have just whithered away on the store shelves, like Andy Dufresne could have in his own cell. But the characters prevailed, because Andy -- And Shawshank -- stayed true. Now, these movies are right up there as the most popular films of all time.
                  - text: Anyone who has yet to watch Shawshank may be so jaded of movies, or the film's title, or how a 2-1/2- hour movie set inside the walls of a prison can manage to tap the soul of such a wide range of people. Shawshank has not one explosion. I wonder if it even has a single special effect or digitally- enhanced frame.
                  - text: But every aspect of Shawshank fit together. The acting from the top to the bit part. The musical score. The editing. The photography. The story, from opening credits to final scene. All involved, including the town of Mansfield, Ohio (where Shawshank was actually filmed) played their roles perfectly. Shawshank is a must- see, must- own title.
                - generic [ref=e771] [cursor=pointer]:
                  - generic [ref=e772]:
                    - link "User auuwws" [ref=e774]:
                      - /url: /user/p.x772cyhwydc5c2oj2r265uncjy/?ref_=tt_ururv_c_2_uname
                      - generic [ref=e775]:
                        - group [ref=e776]:
                          - generic [ref=e778]:
                            - img "Avatar"
                        - generic [ref=e781]: auuwws
                    - generic "Author rating is 10" [ref=e782]:
                      - generic [ref=e784]: "10"
                  - link "the shawshank redemption" [ref=e786]:
                    - /url: /title/tt0111161/reviews/?featured=rw6158379&ref_=tt_ururv_c_2_hd
                    - heading "the shawshank redemption" [level=3] [ref=e787]
                  - text: The best movie in history and the best ending in any entertainment business
                - generic [ref=e788] [cursor=pointer]:
                  - generic [ref=e789]:
                    - link "User baumer" [ref=e791]:
                      - /url: /user/p.odocrgj5lvfevutk3rukg7nqji/?ref_=tt_ururv_c_3_uname
                      - generic [ref=e792]:
                        - group [ref=e793]:
                          - generic [ref=e795]:
                            - img "Avatar"
                        - generic [ref=e798]: baumer
                    - generic "Author rating is 10" [ref=e799]:
                      - generic [ref=e801]: "10"
                  - link "Stephen King's best adapted movie" [ref=e803]:
                    - /url: /title/tt0111161/reviews/?featured=rw0348302&ref_=tt_ururv_c_3_hd
                    - heading "Stephen King's best adapted movie" [level=3] [ref=e804]
                  - text: Misery and Stand By Me were the best adaptations up until this one, now you can add Shawshank to that list.
                  - text: "This is simply one of the best films ever made and I know I am not the first to say that and I certainly won't be the last. The standing on the IMDb is a true barometer of that. #3 as of this date and I'm sure it could be number 1. So I'll just skip all the normal praise of the film because we all know how great it is. But let me perhaps add that what I find so fascinating about Shawshank is that Stephen King wrote it."
                  - text: King is one of the best writers in the world. Books like IT and the Castle Rock series are some of the greatest stories ever told. But his best adaptations are always done by the best directors. The Shining was brilliantly interpreted by Kubrick and of course the aforementioned Misery and Stand By Me are both by Rob Reiner. Now Frank Darabont comes onto the scene and makes arguably the best King film ever. He seems to understand what King wants to say and he conveys that beautifully.
                  - text: What makes this film one of the best ever made is the message it conveys. It is one of eternal hope. Andy Dufresne, played by Tim Robbins, has been sent to prison for a crime he did not commit. But he never loses hope. He never gives up his quest to become a free man again. His years of tenacity, patience and wits keep him not only sane, but it gives his mind and a spirit a will to live. This film has a different feel to it. There has never been anything like it before and I don't know if there will again.
                  - text: I'm not going to say any more about this film, it has already been said, but just suffice to say that I am glad that Forrest Gump won best picture in 94. I would have been equally glad if Pulp Fiction or Shawshank would have won. It is that good of a movie and one that will be appreciated for years to come.
                - generic [ref=e806] [cursor=pointer]:
                  - generic [ref=e807]:
                    - link "User Coxer99" [ref=e809]:
                      - /url: /user/p.xgoctsrtgcc25qawmehvzavskq/?ref_=tt_ururv_c_4_uname
                      - generic [ref=e810]:
                        - group [ref=e811]:
                          - generic [ref=e812]:
                            - img [ref=e814]
                            - img "Placeholder profile image" [ref=e816]
                        - generic [ref=e820]: Coxer99
                    - generic "Author rating is 10" [ref=e821]:
                      - generic [ref=e823]: "10"
                  - link "The Shawshank Redemption" [ref=e825]:
                    - /url: /title/tt0111161/reviews/?featured=rw0348222&ref_=tt_ururv_c_4_hd
                    - heading "The Shawshank Redemption" [level=3] [ref=e826]
                  - text: One of the finest films made in recent years. It's a poignant story about hope. Hope gets me. That's what makes a film like this more than a movie. It tells a lesson about life. Those are the films people talk about 50 or even 100 years from you. It's also a story for freedom. Freedom from isolation, from rule, from bigotry and hate. Freeman and Robbins are majestic in their performances. Each learns from the other. Their relationship is strong and you feel that from the first moment they make contact with one another. There is also a wonderful performance from legend James Whitmore as Brooks.
                  - text: He shines when it is his time to go back into the world, only to find that the world grew up so fast he never even got a chance to blink. Stephen King's story is brought to the screen with great elegance and excitement. It is an extraordinary motion that people "will" be talking about in 50 or 100 years.
                - generic [ref=e827] [cursor=pointer]:
                  - link "User speedreid" [ref=e830]:
                    - /url: /user/p.tlirx2eikf7gwxcyepzahltg6e/?ref_=tt_ururv_c_5_uname
                    - generic [ref=e831]:
                      - group [ref=e832]:
                        - generic [ref=e833]:
                          - img [ref=e835]
                          - img "Placeholder profile image" [ref=e837]
                      - generic [ref=e841]: speedreid
                  - link "Prepare to be moved" [ref=e843]:
                    - /url: /title/tt0111161/reviews/?featured=rw0348718&ref_=tt_ururv_c_5_hd
                    - heading "Prepare to be moved" [level=3] [ref=e844]
                  - text: I have never seen such an amazing film since I saw The Shawshank Redemption. Shawshank encompasses friendships, hardships, hopes, and dreams. And what is so great about the movie is that it moves you, it gives you hope. Even though the circumstances between the characters and the viewers are quite different, you don't feel that far removed from what the characters are going through.
                  - text: It is a simple film, yet it has an everlasting message. Frank Darabont didn't need to put any kind of outlandish special effects to get us to love this film, the narration and the acting does that for him. Why this movie didn't win all seven Oscars is beyond me, but don't let that sway you to not see this film, let its ranking on the IMDb's top 250 list sway you, let your friends recommendation about the movie sway you.
                  - text: Set aside a little over two hours tonight and rent this movie. You will finally understand what everyone is talking about and you will understand why this is my all time favorite movie.
          - generic [ref=e847]:
            - generic [ref=e848]:
              - heading "'The Shawshank Redemption' Without Morgan Freeman?" [level=2] [ref=e849]
              - emphasis [ref=e850]:
                - link "The Shawshank Redemption" [ref=e851] [cursor=pointer]:
                  - /url: /title/tt0111161/?ref_=tt_eds_center-3_lk
              - text: has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?
              - link "Who almost starred?" [ref=e852] [cursor=pointer]:
                - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_c_vd_cc_shs_cta
            - group [ref=e854]:
              - group [ref=e855]:
                - generic [ref=e856]:
                  - img "Editorial Image"
                - link "2:25" [ref=e857] [cursor=pointer]:
                  - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_vd_cc_shs_i
                  - generic [ref=e862]: 2:25
          - generic [ref=e865]:
            - generic [ref=e867]:
              - heading "More like this" [level=3] [ref=e869]:
                - generic [ref=e870]: More like this
              - link "More information" [ref=e872] [cursor=pointer]:
                - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
            - group [ref=e875]:
              - generic [ref=e876]:
                - group [ref=e877]:
                  - group [ref=e878]:
                    - generic [ref=e879]:
                      - img "The Godfather"
                    - button "Add to Watchlist" [ref=e880] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e885] [cursor=pointer]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_i_1
                  - generic [ref=e887]:
                    - generic [ref=e890]: "9.2"
                    - button "Rate The Godfather" [ref=e891] [cursor=pointer]
                  - link "View title page for The Godfather" [ref=e894] [cursor=pointer]:
                    - /url: /title/tt0068646/?ref_=tt_mlt_t_1
                    - text: The Godfather
                  - button "More about this" [ref=e899] [cursor=pointer]
                - group [ref=e902]:
                  - group [ref=e903]:
                    - generic [ref=e904]:
                      - img "The Dark Knight"
                    - button "Add to Watchlist" [ref=e905] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e910] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_i_2
                  - generic [ref=e912]:
                    - generic [ref=e915]: "9.1"
                    - button "Rate The Dark Knight" [ref=e916] [cursor=pointer]
                  - link "View title page for The Dark Knight" [ref=e919] [cursor=pointer]:
                    - /url: /title/tt0468569/?ref_=tt_mlt_t_2
                    - text: The Dark Knight
                  - button "More about this" [ref=e924] [cursor=pointer]
                - group [ref=e927]:
                  - group [ref=e928]:
                    - generic [ref=e929]:
                      - img "Forrest Gump"
                    - button "Add to Watchlist" [ref=e930] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e935] [cursor=pointer]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_i_3
                  - generic [ref=e937]:
                    - generic [ref=e940]: "8.8"
                    - button "Rate Forrest Gump" [ref=e941] [cursor=pointer]
                  - link "View title page for Forrest Gump" [ref=e944] [cursor=pointer]:
                    - /url: /title/tt0109830/?ref_=tt_mlt_t_3
                    - text: Forrest Gump
                  - button "More about this" [ref=e949] [cursor=pointer]
                - group [ref=e952]:
                  - group [ref=e953]:
                    - generic [ref=e954]:
                      - img "Fight Club"
                    - button "Add to Watchlist" [ref=e955] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e960] [cursor=pointer]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_i_4
                  - generic [ref=e962]:
                    - generic [ref=e965]: "8.8"
                    - button "Rate Fight Club" [ref=e966] [cursor=pointer]
                  - link "View title page for Fight Club" [ref=e969] [cursor=pointer]:
                    - /url: /title/tt0137523/?ref_=tt_mlt_t_4
                    - text: Fight Club
                  - button "More about this" [ref=e974] [cursor=pointer]
                - group [ref=e977]:
                  - group [ref=e978]:
                    - generic [ref=e979]:
                      - img "Pulp Fiction"
                    - button "Add to Watchlist" [ref=e980] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e985] [cursor=pointer]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_i_5
                  - generic [ref=e987]:
                    - generic [ref=e990]: "8.8"
                    - button "Rate Pulp Fiction" [ref=e991] [cursor=pointer]
                  - link "View title page for Pulp Fiction" [ref=e994] [cursor=pointer]:
                    - /url: /title/tt0110912/?ref_=tt_mlt_t_5
                    - text: Pulp Fiction
                  - button "More about this" [ref=e999] [cursor=pointer]
                - group [ref=e1002]:
                  - group [ref=e1003]:
                    - generic [ref=e1004]:
                      - img "Interstellar"
                    - button "Add to Watchlist" [ref=e1005] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e1010] [cursor=pointer]:
                      - /url: /title/tt0816692/?ref_=tt_mlt_i_6
                  - generic [ref=e1012]:
                    - generic [ref=e1015]: "8.7"
                    - button "Rate Interstellar" [ref=e1016] [cursor=pointer]
                  - link "View title page for Interstellar" [ref=e1019] [cursor=pointer]:
                    - /url: /title/tt0816692/?ref_=tt_mlt_t_6
                    - text: Interstellar
                  - button "More about this" [ref=e1024] [cursor=pointer]
                - group [ref=e1027]:
                  - group [ref=e1028]:
                    - generic [ref=e1029]:
                      - img "Seven"
                    - button "Add to Watchlist" [ref=e1030] [cursor=pointer]
                    - link "View title page for Seven" [ref=e1035] [cursor=pointer]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_i_7
                  - generic [ref=e1037]:
                    - generic [ref=e1040]: "8.6"
                    - button "Rate Seven" [ref=e1041] [cursor=pointer]
                  - link "View title page for Seven" [ref=e1044] [cursor=pointer]:
                    - /url: /title/tt0114369/?ref_=tt_mlt_t_7
                    - text: Seven
                  - button "More about this" [ref=e1049] [cursor=pointer]
                - group [ref=e1052]:
                  - group [ref=e1053]:
                    - generic [ref=e1054]:
                      - img "Inception"
                    - button "Add to Watchlist" [ref=e1055] [cursor=pointer]
                    - link "View title page for Inception" [ref=e1060] [cursor=pointer]:
                      - /url: /title/tt1375666/?ref_=tt_mlt_i_8
                  - generic [ref=e1062]:
                    - generic [ref=e1065]: "8.8"
                    - button "Rate Inception" [ref=e1066] [cursor=pointer]
                  - link "View title page for Inception" [ref=e1069] [cursor=pointer]:
                    - /url: /title/tt1375666/?ref_=tt_mlt_t_8
                    - text: Inception
                  - button "More about this" [ref=e1074] [cursor=pointer]
                - group [ref=e1077]:
                  - group [ref=e1078]:
                    - generic [ref=e1079]:
                      - img "The Green Mile"
                    - button "Add to Watchlist" [ref=e1080] [cursor=pointer]
                    - link "View title page for The Green Mile" [ref=e1085] [cursor=pointer]:
                      - /url: /title/tt0120689/?ref_=tt_mlt_i_9
                  - generic [ref=e1087]:
                    - generic [ref=e1090]: "8.6"
                    - button "Rate The Green Mile" [ref=e1091] [cursor=pointer]
                  - link "View title page for The Green Mile" [ref=e1094] [cursor=pointer]:
                    - /url: /title/tt0120689/?ref_=tt_mlt_t_9
                    - text: The Green Mile
                  - button "More about this" [ref=e1099] [cursor=pointer]
                - group [ref=e1102]:
                  - group [ref=e1103]:
                    - generic [ref=e1104]:
                      - img "Schindler's List"
                    - button "Add to Watchlist" [ref=e1105] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e1110] [cursor=pointer]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_i_10
                  - generic [ref=e1112]:
                    - generic [ref=e1115]: "9.0"
                    - button "Rate Schindler's List" [ref=e1116] [cursor=pointer]
                  - link "View title page for Schindler's List" [ref=e1119] [cursor=pointer]:
                    - /url: /title/tt0108052/?ref_=tt_mlt_t_10
                    - text: Schindler's List
                  - button "More about this" [ref=e1124] [cursor=pointer]
                - group [ref=e1127]:
                  - group [ref=e1128]:
                    - generic [ref=e1129]:
                      - img "The Godfather Part II"
                    - button "Add to Watchlist" [ref=e1130] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e1135] [cursor=pointer]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_i_11
                  - generic [ref=e1137]:
                    - generic [ref=e1140]: "9.0"
                    - button "Rate The Godfather Part II" [ref=e1141] [cursor=pointer]
                  - link "View title page for The Godfather Part II" [ref=e1144] [cursor=pointer]:
                    - /url: /title/tt0071562/?ref_=tt_mlt_t_11
                    - text: The Godfather Part II
                  - button "More about this" [ref=e1149] [cursor=pointer]
                - group [ref=e1152]:
                  - group [ref=e1153]:
                    - generic [ref=e1154]:
                      - img "Saving Private Ryan"
                    - button "Add to Watchlist" [ref=e1155] [cursor=pointer]
                    - link "View title page for Saving Private Ryan" [ref=e1160] [cursor=pointer]:
                      - /url: /title/tt0120815/?ref_=tt_mlt_i_12
                  - generic [ref=e1162]:
                    - generic [ref=e1165]: "8.6"
                    - button "Rate Saving Private Ryan" [ref=e1166] [cursor=pointer]
                  - link "View title page for Saving Private Ryan" [ref=e1169] [cursor=pointer]:
                    - /url: /title/tt0120815/?ref_=tt_mlt_t_12
                    - text: Saving Private Ryan
                  - button "More about this" [ref=e1174] [cursor=pointer]
          - generic [ref=e1177]:
            - link "Related interests" [ref=e1179] [cursor=pointer]:
              - /url: /interest/all/?ref_=tt_rin_sm
              - heading "Related interests" [level=3] [ref=e1180]:
                - generic [ref=e1181]: Related interests
            - group [ref=e1183]:
              - generic [ref=e1184]:
                - generic [ref=e1185]:
                  - group [ref=e1186]:
                    - generic [ref=e1187]:
                      - img "Orson Welles in Citizen Kane (1941)"
                    - button "Add Epic to your interests" [ref=e1188] [cursor=pointer]
                    - link "Epic" [ref=e1190] [cursor=pointer]:
                      - /url: /interest/in0000077/?ref_=tt_rin_in_i_1
                  - link "Epic" [ref=e1192] [cursor=pointer]:
                    - /url: /interest/in0000077/?ref_=tt_rin_in_t_1
                    - generic [ref=e1193]: Epic
                - generic [ref=e1194]:
                  - group [ref=e1195]:
                    - generic [ref=e1196]:
                      - img "Emma Watson, Saoirse Ronan, Florence Pugh, and Eliza Scanlen in Little Women (2019)"
                    - button "Add Period Drama to your interests" [ref=e1197] [cursor=pointer]
                    - link "Period Drama" [ref=e1199] [cursor=pointer]:
                      - /url: /interest/in0000083/?ref_=tt_rin_in_i_2
                  - link "Period Drama" [ref=e1201] [cursor=pointer]:
                    - /url: /interest/in0000083/?ref_=tt_rin_in_t_2
                    - generic [ref=e1202]: Period Drama
                - generic [ref=e1203]:
                  - group [ref=e1204]:
                    - generic [ref=e1205]:
                      - img "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)"
                    - button "Add Prison Drama to your interests" [ref=e1206] [cursor=pointer]
                    - link "Prison Drama" [ref=e1208] [cursor=pointer]:
                      - /url: /interest/in0000085/?ref_=tt_rin_in_i_3
                  - link "Prison Drama" [ref=e1210] [cursor=pointer]:
                    - /url: /interest/in0000085/?ref_=tt_rin_in_t_3
                    - generic [ref=e1211]: Prison Drama
                - generic [ref=e1212]:
                  - group [ref=e1213]:
                    - generic [ref=e1214]:
                      - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                    - button "Add Psychological Drama to your interests" [ref=e1215] [cursor=pointer]
                    - link "Psychological Drama" [ref=e1217] [cursor=pointer]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_i_4
                  - link "Psychological Drama" [ref=e1219] [cursor=pointer]:
                    - /url: /interest/in0000086/?ref_=tt_rin_in_t_4
                    - generic [ref=e1220]: Psychological Drama
                - generic [ref=e1221]:
                  - group [ref=e1222]:
                    - generic [ref=e1223]:
                      - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                    - button "Add Drama to your interests" [ref=e1224] [cursor=pointer]
                    - link "Drama" [ref=e1226] [cursor=pointer]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_i_5
                  - link "Drama" [ref=e1228] [cursor=pointer]:
                    - /url: /interest/in0000076/?ref_=tt_rin_in_t_5
                    - generic [ref=e1229]: Drama
          - generic [ref=e1232]:
            - link "Storyline" [ref=e1233] [cursor=pointer]:
              - /url: "#storyline"
              - heading "Storyline" [level=3] [ref=e1234]:
                - generic [ref=e1235]: Storyline
            - 'button "Storyline: edit" [ref=e1239] [cursor=pointer]':
              - generic [ref=e1242]: Edit
          - generic [ref=e1244]:
            - generic [ref=e1246]:
              - heading "Did you know" [level=3] [ref=e1248]:
                - generic [ref=e1249]: Did you know
              - 'button "Did you know: edit" [ref=e1251] [cursor=pointer]':
                - generic [ref=e1254]: Edit
            - generic [ref=e1255]:
              - link "See more" [ref=e1256] [cursor=pointer]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
                - text: Trivia
              - generic [ref=e1258] [cursor=pointer]:
                - button "See more" [ref=e1259]
                - generic [ref=e1264]:
                  - text: Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director
                  - link "Frank Darabont" [ref=e1265]:
                    - /url: /name/nm0001104/?ref_=dyk_trv
                  - text: insisted on many takes of the scene before he was satisfied.
                  - link "Morgan Freeman" [ref=e1266]:
                    - /url: /name/nm0000151/?ref_=dyk_trv
                  - text: threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.
              - link "See more" [ref=e1267] [cursor=pointer]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
            - generic [ref=e1270]:
              - link "See more" [ref=e1271] [cursor=pointer]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
                - text: Goofs
              - generic [ref=e1273] [cursor=pointer]:
                - button "See more" [ref=e1274]
                - generic [ref=e1279]:
                  - text: Circa 1963, Heywood is shown listening to the record "24 of
                  - link "Hank Williams" [ref=e1280]:
                    - /url: /name/nm0930729/?ref_=dyk_gf
                  - text: "' Greatest Hits\", released in 1970."
              - link "See more" [ref=e1281] [cursor=pointer]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
            - generic [ref=e1284]:
              - link "See more" [ref=e1285] [cursor=pointer]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
                - text: Quotes
              - generic [ref=e1287] [cursor=pointer]:
                - button "See more" [ref=e1288]
                - list [ref=e1293]:
                  - listitem [ref=e1294]:
                    - link "Andy Dufresne" [ref=e1295]:
                      - /url: /name/nm0000209/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1296]: to Red
                    - text: "] I guess it comes down to a simple choice, really. Get busy living, or get busy dying."
              - link "See more" [ref=e1297] [cursor=pointer]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
            - generic [ref=e1300]:
              - link "See more" [ref=e1301] [cursor=pointer]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
                - text: Crazy credits
              - generic [ref=e1303] [cursor=pointer]:
                - button "See more" [ref=e1304]
                - generic [ref=e1309]: The man who cried and was beaten when Andy first arrived is listed and credited as "Fat Ass" -- the other inmates' nickname for him.
              - link "See more" [ref=e1310] [cursor=pointer]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
            - generic [ref=e1313]:
              - link "See more" [ref=e1314] [cursor=pointer]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
                - text: Alternate versions
              - generic [ref=e1316] [cursor=pointer]:
                - button "See more" [ref=e1317]
                - generic [ref=e1322]: This film was produced independently by Castle Rock Entertainment, but distributed by Columbia Pictures, which placed their logo at the beginning of the film. After the first video release, Castle Rock began to use Warner Bros. as their distributor. This film was then later re-issued on video and DVD by Warner Bros., which replaced the Columbia Pictures logo with their own. (The 1999 WB DVD uses no studio logo before Castle Rock [A Turner Company], and has no Columbia line-art logo at the end, just 10 seconds of blank screen as the music finishes. The post-2004 prints start with the 2003 WB logo and an updated Castle Rock logo [A TimeWarner Company], and have the Columbia line-art logo in the crawl at the end followed by a quick, still, 2003 WB logo. See also The American President.)
              - link "See more" [ref=e1323] [cursor=pointer]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
            - generic [ref=e1326]:
              - link "See more" [ref=e1327] [cursor=pointer]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
                - text: Connections
              - generic [ref=e1329] [cursor=pointer]:
                - button "See more" [ref=e1330]
                - generic [ref=e1333]:
                  - text: Featured in
                  - 'link "At the Movies with Ebert & Roeper: Why Gump? Why Now?" [ref=e1334]':
                    - /url: /title/tt1936736/?ref_=tt_dyk_cnn
                  - text: (1994)
              - link "See more" [ref=e1335] [cursor=pointer]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
            - generic [ref=e1338]:
              - link "See more" [ref=e1339] [cursor=pointer]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
                - text: Soundtracks
              - generic [ref=e1341] [cursor=pointer]:
                - button "See more" [ref=e1342]
                - generic [ref=e1345]:
                  - text: If I Didn't Care
                  - generic [ref=e1346]:
                    - text: by
                    - link "Jack Lawrence" [ref=e1347]:
                      - /url: /name/nm0492805/?ref_=dyk_snd
                  - generic [ref=e1348]:
                    - text: Performed by
                    - link "The Ink Spots" [ref=e1349]:
                      - /url: /name/nm1311414/?ref_=dyk_snd
                  - generic [ref=e1350]: Courtesy of MCA Records
              - link "See more" [ref=e1351] [cursor=pointer]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
          - generic [ref=e1355]:
            - generic [ref=e1356]:
              - link "Top picks" [ref=e1357] [cursor=pointer]:
                - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                - heading "Top picks" [level=3] [ref=e1358]:
                  - generic [ref=e1359]: Top picks
              - generic [ref=e1361]: Sign in to rate and Watchlist for personalized recommendations
            - link "Sign in" [ref=e1362] [cursor=pointer]:
              - /url: /registration/signin?ref_=tt_tpks_signin
              - generic [ref=e1363]: Sign in
          - generic [ref=e1365]:
            - link "FAQ 47" [ref=e1367] [cursor=pointer]:
              - /url: /title/tt0111161/faq/?ref_=tt_faq_sm
              - heading "FAQ 47" [level=3] [ref=e1368]:
                - generic [ref=e1369]: FAQ
                - generic [ref=e1370]: "47"
            - generic [ref=e1372]:
              - generic [ref=e1373] [cursor=pointer]:
                - link "How long is The Shawshank Redemption?" [ref=e1375]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                - generic [ref=e1376]: Powered by Alexa
              - link "See the answer" [ref=e1378] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
              - link "Does the novella explain why Fat Ass is in prison? He seems too much like a cry baby to have committed any crimes." [ref=e1383] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "See the answer" [ref=e1384] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "Why does Andy talk in code to Red at the movie about getting Rita Hayworth since they have already done business before and Andy asked for the rock hammer in the same way?" [ref=e1389] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "See the answer" [ref=e1390] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "Why is Captain Hadley so cruel?" [ref=e1395] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
              - link "See the answer" [ref=e1396] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
          - generic [ref=e1399]:
            - generic [ref=e1401]:
              - heading "Details" [level=3] [ref=e1403]:
                - generic [ref=e1404]: Details
              - 'button "Details: edit" [ref=e1406] [cursor=pointer]':
                - generic [ref=e1409]: Edit
            - generic [ref=e1410]:
              - link "See more" [ref=e1411] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - text: Release date
              - link "October 14, 1994 (United States)" [ref=e1413] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - link "See more" [ref=e1414] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - generic [ref=e1417]: Country of origin
              - link "United States" [ref=e1419] [cursor=pointer]:
                - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
              - generic "See more" [ref=e1420]: Official sites
              - generic [ref=e1421]:
                - link "Official Facebook" [ref=e1422] [cursor=pointer]:
                  - /url: https://www.facebook.com/shawshankredemptionfilm/
                  - text: Official Facebook
                - link "Warner Bros. (United States)" [ref=e1424] [cursor=pointer]:
                  - /url: https://www.warnerbros.com/movies/shawshank-redemption
                  - text: Warner Bros. (United States)
              - generic [ref=e1426]: Language
              - link "English" [ref=e1428] [cursor=pointer]:
                - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
              - link "See more" [ref=e1429] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                - text: Also known as
              - generic [ref=e1430] [cursor=pointer]: Sueño de fuga
              - link "See more" [ref=e1431] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
              - link "See more" [ref=e1434] [cursor=pointer]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                - text: Filming locations
              - generic [ref=e1435] [cursor=pointer]:
                - link "Butler, Ohio, USA" [ref=e1436]:
                  - /url: /search/title/?locations=Butler%40%40%40%20Ohio%40%40%40%20USA&ref_=tt_dt_loc
                - text: (Exterior, rural town of "Buxton" where "Red" journeys to; shot of bus leaving with "Red" near end of film)
              - link "See more" [ref=e1437] [cursor=pointer]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
              - link "See more" [ref=e1440] [cursor=pointer]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                - text: Production company
              - link "Castle Rock Entertainment" [ref=e1442] [cursor=pointer]:
                - /url: /company/co0040620/?ref_=tt_dt_cmpy_1
              - link "See more" [ref=e1443] [cursor=pointer]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
              - link "See more" [ref=e1446] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                - text: See more company credits at IMDbPro
              - link "See more" [ref=e1447] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
          - generic [ref=e1449]:
            - generic [ref=e1451]:
              - heading "Box office" [level=3] [ref=e1453]:
                - generic [ref=e1454]: Box office
              - 'button "Box office: edit" [ref=e1456] [cursor=pointer]':
                - generic [ref=e1459]: Edit
            - generic [ref=e1460]:
              - generic [ref=e1461]: Budget
              - generic [ref=e1462]: $25,000,000 (estimated)
              - generic [ref=e1463]: Gross US & Canada
              - generic [ref=e1464]: $28,767,189
              - generic [ref=e1465]: Opening weekend US & Canada
              - generic [ref=e1466]: $727,327 Sep 25, 1994
              - generic [ref=e1467]: Gross worldwide
              - generic [ref=e1468]: $29,420,884
              - generic [ref=e1469]:
                - link "Go to IMDbPro" [ref=e1470] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - img [ref=e1471]
                - link "See detailed box office info on IMDbPro" [ref=e1481] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - text: See detailed box office info on IMDbPro
          - generic [ref=e1483]:
            - generic [ref=e1485]:
              - link "Tech specs" [ref=e1486] [cursor=pointer]:
                - /url: /title/tt0111161/technical/?ref_=tt_spec_sm
                - heading "Tech specs" [level=3] [ref=e1487]:
                  - generic [ref=e1488]: Tech specs
              - 'button "Tech specs: edit" [ref=e1491] [cursor=pointer]':
                - generic [ref=e1494]: Edit
            - generic [ref=e1495]:
              - generic [ref=e1496]: Runtime
              - generic [ref=e1497]: 2h 22m(142 min)
              - generic [ref=e1498]: Color
              - link "Color" [ref=e1500] [cursor=pointer]:
                - /url: /search/title/?colors=color&ref_=tt_spec_att
              - generic [ref=e1501]: Sound mix
              - link "Dolby Digital" [ref=e1503] [cursor=pointer]:
                - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
              - generic [ref=e1504]: Aspect ratio
              - generic [ref=e1505]: "1.85 : 1"
          - generic [ref=e1509]:
            - generic [ref=e1510]:
              - link "Contribute to this page" [ref=e1511] [cursor=pointer]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                - heading "Contribute to this page" [level=3] [ref=e1512]:
                  - generic [ref=e1513]: Contribute to this page
              - generic [ref=e1515]: Suggest an edit or add missing content
            - generic [ref=e1516]:
              - link "Go to Learn more about contributing" [ref=e1517] [cursor=pointer]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                - text: Learn more about contributing
              - link "Go to Learn more about contributing" [ref=e1518] [cursor=pointer]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
            - link "Edit page" [ref=e1522] [cursor=pointer]:
              - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
              - generic [ref=e1525]: Edit page
        - heading "More to explore" [level=3] [ref=e1534]
  - generic [ref=e1539]:
    - heading "Recently viewed" [level=3] [ref=e1542]
    - generic [ref=e1544]: You have no recently viewed pages
  - contentinfo [ref=e1549]:
    - link "Sign in for more access" [ref=e1551] [cursor=pointer]:
      - /url: /registration/signin/?u=%2F&ref_=tt_ftr_reg
      - generic [ref=e1552]: Sign in for more access
    - generic [ref=e1553]:
      - generic [ref=e1554]:
        - generic [ref=e1555]:
          - generic [ref=e1556]: Follow IMDb on social
          - link "TikTok" [ref=e1557] [cursor=pointer]:
            - /url: https://www.tiktok.com/@imdb
          - link "Instagram" [ref=e1559] [cursor=pointer]:
            - /url: https://instagram.com/imdb
          - link "Twitter" [ref=e1562] [cursor=pointer]:
            - /url: https://twitter.com/imdb
          - link "YouTube" [ref=e1564] [cursor=pointer]:
            - /url: https://youtube.com/imdb/
          - link "Facebook" [ref=e1566] [cursor=pointer]:
            - /url: https://facebook.com/imdb
        - generic [ref=e1568]:
          - generic [ref=e1569]:
            - generic [ref=e1570]: Get the IMDb app
            - generic [ref=e1571]: For Android and iOS
          - group [ref=e1573]:
            - generic [ref=e1574]:
              - img "Get the IMDb app"
            - link "For Android and iOS" [ref=e1575] [cursor=pointer]:
              - /url: https://slyb.app.link/Aa96cLcBeAb
      - generic [ref=e1577]:
        - link "Help" [ref=e1578] [cursor=pointer]:
          - /url: https://help.imdb.com/imdb
          - text: Help
        - link "Site Index" [ref=e1580] [cursor=pointer]:
          - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
          - text: Site Index
        - link "IMDbPro" [ref=e1582] [cursor=pointer]:
          - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
          - text: IMDbPro
        - link "Box Office Mojo" [ref=e1584] [cursor=pointer]:
          - /url: https://www.boxofficemojo.com
          - text: Box Office Mojo
        - link "License IMDb Data" [ref=e1586] [cursor=pointer]:
          - /url: https://developer.imdb.com/
          - text: License IMDb Data
      - generic [ref=e1588]:
        - link "Press Room" [ref=e1589] [cursor=pointer]:
          - /url: /pressroom/?ref_=tt_ftr
        - link "Advertising" [ref=e1590] [cursor=pointer]:
          - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
          - text: Advertising
        - link "Jobs" [ref=e1592] [cursor=pointer]:
          - /url: https://www.amazon.jobs/en/teams/imdb
          - text: Jobs
        - link "Conditions of Use" [ref=e1594] [cursor=pointer]:
          - /url: /conditions/?ref_=tt_ftr
        - link "Privacy Policy" [ref=e1595] [cursor=pointer]:
          - /url: /privacy/?ref_=tt_ftr
        - generic [ref=e1596]:
          - link "Your Ads Privacy Choices" [ref=e1597] [cursor=pointer]:
            - /url: /privacy/redirect/?ref_=tt_ftr
            - img [ref=e1598]
          - link "Your Ads Privacy Choices" [ref=e1610] [cursor=pointer]:
            - /url: /privacy/redirect/?ref_=tt_ftr
    - img "IMDb, an Amazon company" [ref=e1612]
    - paragraph [ref=e1648]: © 1990-2026 by IMDb.com, Inc.
  - button "Back to top" [ref=e1649] [cursor=pointer]:
    - generic [ref=e1652]: Back to top
  - img
  - status
  - img
```

# Test source

```ts
  1   | // @ts-check
  2   | 
  3   | import { test, expect } from '@playwright/test';
  4   | 
  5   | test.describe('IMDb Showtimes & Tickets', () => {
  6   | 
  7   |   const movieUrl = 'https://www.imdb.com/title/tt0111161/';
  8   | 
  9   |   test.beforeEach(async ({ page }) => {
  10  |     await page.goto(movieUrl);
  11  |   });
  12  |   test.afterEach(async ({ page }) => {
  13  |     console.log('Test completed');
  14  |   });
  15  | 
  16  |   // 1
  17  |   test('Movie page loads successfully', async ({ page }) => {
  18  |       await expect.poll(async () => {
  19  |       return await page.locator('h1').count();
> 20  |     }).toBeGreaterThan(0);
      |        ^ Error: expect(received).toBeGreaterThan(expected)
  21  |   });
  22  | 
  23  |   // // 2
  24  |   // test('Showtimes section is available on page or redirect exists', async ({ page }) => {
  25  |   //   await page.goto('https://www.imdb.com/title/tt0111161/');
  26  | 
  27  |   //   const showtimesText = page.locator('text=/showtimes|tickets/i');
  28  | 
  29  |   //   const count = await showtimesText.count();
  30  | 
  31  |   //   expect(count).toBeGreaterThanOrEqual(0); 
  32  |   // });
  33  | 
  34  |   // // 3
  35  |   // test('Showtimes button is clickable', async ({ page }) => {
  36  |   //   const btn = page.getByRole('link', { name: /showtimes/i });
  37  | 
  38  |   //   if (await btn.count() > 0) {
  39  |   //     await btn.first().click();
  40  |   //   }
  41  |   // });
  42  | 
  43  | //   // 4
  44  | //   test('Navigation to showtimes page works', async ({ page }) => {
  45  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  46  | 
  47  | //     if (await btn.count() > 0) {
  48  | //       await btn.first().click();
  49  | //       await page.waitForLoadState('domcontentloaded');
  50  | 
  51  | //       await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
  52  | //     }
  53  | //   });
  54  | 
  55  | //   // 5
  56  | //   test('Showtimes page content loads', async ({ page }) => {
  57  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  58  | 
  59  | //     if (await btn.count() > 0) {
  60  | //       await btn.first().click();
  61  | //       await expect(page.locator('body')).toBeVisible();
  62  | //     }
  63  | //   });
  64  | 
  65  | //   // 6
  66  | //   test('Location prompt appears or handled', async ({ page }) => {
  67  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  68  | 
  69  | //     if (await btn.count() > 0) {
  70  | //       await btn.first().click();
  71  | 
  72  | //       const location = page.locator('text=/location/i');
  73  | //       if (await location.count() > 0) {
  74  | //         await expect(location.first()).toBeVisible();
  75  | //       }
  76  | //     }
  77  | //   });
  78  | 
  79  | //   // 7
  80  | //   test('Cinema listings exist', async ({ page }) => {
  81  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  82  | 
  83  | //     if (await btn.count() > 0) {
  84  | //       await btn.first().click();
  85  | 
  86  | //       const cinemas = page.locator('text=/cinema|theatre|theater/i');
  87  | //       if (await cinemas.count() > 0) {
  88  | //         await expect(cinemas.first()).toBeVisible();
  89  | //       }
  90  | //     }
  91  | //   });
  92  | 
  93  | //   // 8
  94  | //   test('Showtimes are visible', async ({ page }) => {
  95  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  96  | 
  97  | //     if (await btn.count() > 0) {
  98  | //       await btn.first().click();
  99  | 
  100 | //       const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
  101 | //       if (await times.count() > 0) {
  102 | //         await expect(times.first()).toBeVisible();
  103 | //       }
  104 | //     }
  105 | //   });
  106 | 
  107 | //   // 9
  108 | //   test('Ticket links are visible', async ({ page }) => {
  109 | //     const btn = page.getByRole('link', { name: /showtimes/i });
  110 | 
  111 | //     if (await btn.count() > 0) {
  112 | //       await btn.first().click();
  113 | 
  114 | //       const links = page.locator('a[href*="ticket"], a[target="_blank"]');
  115 | //       await expect(links.first()).toBeVisible();
  116 | //     }
  117 | //   });
  118 | 
  119 | //   // 10
  120 | //   test('External ticket redirect works', async ({ page }) => {
```