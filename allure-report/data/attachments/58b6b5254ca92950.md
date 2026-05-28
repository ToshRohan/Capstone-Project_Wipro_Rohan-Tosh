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
      - generic [ref=e70]:
        - generic [ref=e72]:
          - link "Cast & crew" [ref=e73] [cursor=pointer]:
            - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_ql_1
          - link "User reviews" [ref=e74] [cursor=pointer]:
            - /url: /title/tt0111161/reviews/?ref_=tt_ov_ql_2
          - link "Trivia" [ref=e75] [cursor=pointer]:
            - /url: /title/tt0111161/trivia/?ref_=tt_ov_ql_3
          - link "FAQ" [ref=e76] [cursor=pointer]:
            - /url: /title/tt0111161/faq/?ref_=tt_ov_ql_4
          - link "IMDbPro" [ref=e78] [cursor=pointer]:
            - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
          - button "View all topics" [ref=e79] [cursor=pointer]:
            - generic [ref=e81]: All topics
          - button "Share on social media" [ref=e83] [cursor=pointer]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - heading "The Shawshank Redemption" [level=1] [ref=e88]
            - link "1994" [ref=e89] [cursor=pointer]:
              - /url: /title/tt0111161/releaseinfo/?ref_=tt_ov_rdat
            - link "R" [ref=e90] [cursor=pointer]:
              - /url: /title/tt0111161/parentalguide/?ref_=tt_ov_pg#certificates
            - text: 2h 22m
          - generic [ref=e92]:
            - generic [ref=e93]:
              - generic [ref=e94]: IMDb RATING
              - link "View User Ratings" [ref=e95] [cursor=pointer]:
                - /url: /title/tt0111161/ratings/?ref_=tt_ov_rat
                - generic [ref=e100]:
                  - generic [ref=e101]:
                    - generic [ref=e102]: "9.3"
                    - generic [ref=e103]: /10
                  - generic [ref=e104]: 3.2M
            - generic [ref=e105]:
              - generic [ref=e106]: YOUR RATING
              - button "Rate The Shawshank Redemption" [ref=e107] [cursor=pointer]:
                - generic [ref=e114]: Rate
            - generic [ref=e115]:
              - generic [ref=e116]: POPULARITY
              - link "View Popular Movies" [ref=e117] [cursor=pointer]:
                - /url: /chart/moviemeter/?ref_=tt_ov_pop
                - generic [ref=e122]:
                  - generic [ref=e123]: "37"
                  - generic [ref=e124]: "6"
        - generic [ref=e127]:
          - generic [ref=e128]:
            - group [ref=e130]:
              - img "Tim Robbins in The Shawshank Redemption (1994)" [ref=e132]
              - button "Add to Watchlist" [ref=e133] [cursor=pointer]
              - link "View ’The Shawshank Redemption’ Poster" [ref=e138] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i
            - generic [ref=e140]:
              - button "Video Preview Preference" [ref=e142] [cursor=pointer]
              - group [ref=e144] [cursor=pointer]:
                - img "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." [ref=e146]
                - generic [ref=e154]: Play trailer2:11
            - generic [ref=e158]:
              - link "6 Videos" [ref=e159] [cursor=pointer]:
                - /url: /title/tt0111161/videogallery/?ref_=tt_ov_vi_sm
                - generic [ref=e163]: 6 Videos
              - link "99+ Photos" [ref=e164] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ov_m_sm
                - generic [ref=e169]: 99+ Photos
          - generic [ref=e170]:
            - generic [ref=e172]:
              - generic [ref=e174]:
                - link "Epic" [ref=e175] [cursor=pointer]:
                  - /url: /interest/in0000077/?ref_=tt_ov_in_1
                  - generic [ref=e176]: Epic
                - link "Period Drama" [ref=e177] [cursor=pointer]:
                  - /url: /interest/in0000083/?ref_=tt_ov_in_2
                  - generic [ref=e178]: Period Drama
                - link "Prison Drama" [ref=e179] [cursor=pointer]:
                  - /url: /interest/in0000085/?ref_=tt_ov_in_3
                  - generic [ref=e180]: Prison Drama
                - link "Psychological Drama" [ref=e181] [cursor=pointer]:
                  - /url: /interest/in0000086/?ref_=tt_ov_in_4
                  - generic [ref=e182]: Psychological Drama
                - link "Drama" [ref=e183] [cursor=pointer]:
                  - /url: /interest/in0000076/?ref_=tt_ov_in_5
                  - generic [ref=e184]: Drama
              - paragraph [ref=e185]:
                - generic [ref=e186]: A wrongfully convicted banker forms a close friendship with a hardened convict over a quarter century while retaining his humanity through simple acts of compassion.
              - generic [ref=e187]:
                - generic [ref=e188]: Director
                - link "Frank Darabont" [ref=e190] [cursor=pointer]:
                  - /url: /name/nm0001104/?ref_=tt_ov_1_1
                - generic [ref=e191]: Writers
                - generic [ref=e192]:
                  - link "Stephen King" [ref=e193] [cursor=pointer]:
                    - /url: /name/nm0000175/?ref_=tt_ov_2_1
                  - link "Frank Darabont" [ref=e194] [cursor=pointer]:
                    - /url: /name/nm0001104/?ref_=tt_ov_2_2
                - link "See full cast and crew" [ref=e195] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                  - text: Stars
                - generic [ref=e196] [cursor=pointer]:
                  - link "Tim Robbins" [ref=e197]:
                    - /url: /name/nm0000209/?ref_=tt_ov_3_1
                  - link "Morgan Freeman" [ref=e198]:
                    - /url: /name/nm0000151/?ref_=tt_ov_3_2
                  - link "Bob Gunton" [ref=e199]:
                    - /url: /name/nm0348409/?ref_=tt_ov_3_3
                - link "See full cast and crew" [ref=e200] [cursor=pointer]:
                  - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
              - generic [ref=e204]:
                - link "Go to IMDbPro" [ref=e205] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                  - img [ref=e206]
                - link "See production info at IMDbPro" [ref=e216] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                  - text: See production info at IMDbPro
            - generic [ref=e218]:
              - generic [ref=e220]:
                - generic [ref=e221] [cursor=pointer]:
                  - button "Add to Watchlist Added by 1.7M users" [ref=e222]:
                    - generic [ref=e224]:
                      - generic [ref=e225]: Add to Watchlist
                      - generic [ref=e226]: Added by 1.7M users
                  - button "Add title to another list" [ref=e227]
                - button "Loading" [ref=e230] [cursor=pointer]
              - link "11.8K User reviews" [ref=e232] [cursor=pointer]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ov_ururv
                - generic [ref=e233]:
                  - generic [ref=e234]: 11.8K
                  - generic [ref=e235]: User reviews
              - link "154 Critic reviews" [ref=e236] [cursor=pointer]:
                - /url: /title/tt0111161/externalreviews/?ref_=tt_ov_crv
                - generic [ref=e237]:
                  - generic [ref=e238]: "154"
                  - generic [ref=e239]: Critic reviews
              - link "82 Metascore" [ref=e240] [cursor=pointer]:
                - /url: /title/tt0111161/criticreviews/?ref_=tt_ov_msc
                - generic [ref=e241]:
                  - generic [ref=e243]: "82"
                  - generic [ref=e244]: Metascore
      - generic [ref=e246]:
        - generic [ref=e247]:
          - generic [ref=e249]:
            - 'link "Top rated movie #1" [ref=e251] [cursor=pointer]':
              - /url: /chart/top/?ref_=tt_awd
            - link "See more awards and nominations" [ref=e252] [cursor=pointer]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
              - text: Nominated for 7 Oscars
            - generic [ref=e253] [cursor=pointer]: 21 wins & 43 nominations total
            - link "See more awards and nominations" [ref=e254] [cursor=pointer]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
          - generic [ref=e261]:
            - link "Videos 6" [ref=e263] [cursor=pointer]:
              - /url: /title/tt0111161/videogallery/?ref_=tt_vids_sm
              - heading "Videos 6" [level=3] [ref=e264]:
                - text: Videos
                - generic [ref=e265]: "6"
            - generic [ref=e268]:
              - group [ref=e269]:
                - group [ref=e270]:
                  - img "Official Trailer" [ref=e272]
                  - link "TrailerOfficial Trailer" [ref=e273] [cursor=pointer]:
                    - /url: /video/vi3877612057/?ref_=tt_vids_vi_1
                    - generic [ref=e278]: Trailer 2:11
                - link "TrailerOfficial Trailer" [ref=e281] [cursor=pointer]:
                  - /url: /video/vi3877612057/?ref_=tt_vids_vi_t_1
                  - generic [ref=e282]: Official Trailer
              - group [ref=e285]:
                - group [ref=e286]:
                  - img "Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e288]
                  - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e289] [cursor=pointer]:
                    - /url: /video/vi976077081/?ref_=tt_vids_vi_2
                    - generic [ref=e294]: Clip 8:43
                - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e297] [cursor=pointer]:
                  - /url: /video/vi976077081/?ref_=tt_vids_vi_t_2
                  - generic [ref=e298]: Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films
            - group [ref=e302]:
              - generic [ref=e303]:
                - group [ref=e304]:
                  - group [ref=e305]:
                    - img "'The Shawshank Redemption' | Anniversary Mashup" [ref=e307]
                    - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e308] [cursor=pointer]:
                      - /url: /video/vi2425798425/?ref_=tt_vids_vi_3
                      - generic [ref=e313]: Clip 1:01
                  - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e316] [cursor=pointer]:
                    - /url: /video/vi2425798425/?ref_=tt_vids_vi_t_3
                    - generic [ref=e317]: "'The Shawshank Redemption' | Anniversary Mashup"
                - group [ref=e320]:
                  - group [ref=e321]:
                    - img "What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e323]
                    - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e324] [cursor=pointer]:
                      - /url: /video/vi2910632473/?ref_=tt_vids_vi_4
                      - generic [ref=e329]: Video 1:55
                  - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e332] [cursor=pointer]:
                    - /url: /video/vi2910632473/?ref_=tt_vids_vi_t_4
                    - generic [ref=e333]: What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson
                - group [ref=e336]:
                  - group [ref=e337]:
                    - img "Who Else Almost Starred In 'The Shawshank Redemption?'" [ref=e339]
                    - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e340] [cursor=pointer]:
                      - /url: /video/vi2032974361/?ref_=tt_vids_vi_5
                      - generic [ref=e345]: Video 2:25
                  - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e348] [cursor=pointer]:
                    - /url: /video/vi2032974361/?ref_=tt_vids_vi_t_5
                    - generic [ref=e349]: Who Else Almost Starred In 'The Shawshank Redemption?'
                - group [ref=e352]:
                  - group [ref=e353]:
                    - img "Roles That Tom Cruise Turned Down" [ref=e355]
                    - link "VideoRoles That Tom Cruise Turned Down" [ref=e356] [cursor=pointer]:
                      - /url: /video/vi1874967321/?ref_=tt_vids_vi_6
                      - generic [ref=e361]: Video 2:22
                  - link "VideoRoles That Tom Cruise Turned Down" [ref=e364] [cursor=pointer]:
                    - /url: /video/vi1874967321/?ref_=tt_vids_vi_t_6
                    - generic [ref=e365]: Roles That Tom Cruise Turned Down
          - generic [ref=e368]:
            - generic [ref=e370]:
              - link "Photos 565" [ref=e371] [cursor=pointer]:
                - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_sm
                - heading "Photos 565" [level=3] [ref=e372]:
                  - text: Photos
                  - generic [ref=e373]: "565"
              - button "Add photo" [ref=e376] [cursor=pointer]:
                - generic [ref=e378]: Add photo
            - generic [ref=e379]:
              - generic [ref=e380]:
                - link "View Poster" [ref=e381] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_1
                  - img "View Poster" [ref=e383]
                - link "View Poster" [ref=e384] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2954723328/?ref_=tt_ph_2
                  - img "View Poster" [ref=e386]
                - link "View Poster" [ref=e387] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3206381568/?ref_=tt_ph_3
                  - img "View Poster" [ref=e389]
              - generic [ref=e390]:
                - link "View Poster" [ref=e391] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3172827136/?ref_=tt_ph_1_1
                  - img "View Poster" [ref=e393]
                - link "View Poster" [ref=e394] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3156049920/?ref_=tt_ph_1_2
                  - img "View Poster" [ref=e396]
                - link "View Poster" [ref=e397] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3139272704/?ref_=tt_ph_1_3
                  - img "View Poster" [ref=e399]
                - link "+ 559 View Poster" [ref=e400] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3122495488/?ref_=tt_ph_more
                  - generic [ref=e401]: + 559
                  - img "View Poster" [ref=e403]
          - generic [ref=e408]:
            - generic [ref=e410]:
              - link "Top Cast 74" [ref=e411] [cursor=pointer]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                - heading "Top Cast 74" [level=3] [ref=e412]:
                  - generic [ref=e413]: Top Cast
                  - generic [ref=e414]: "74"
              - 'button "Top Cast: edit" [ref=e417] [cursor=pointer]':
                - generic [ref=e420]: Edit
            - group [ref=e421]:
              - generic [ref=e422]:
                - generic [ref=e423]:
                  - group [ref=e425]:
                    - img "Tim Robbins" [ref=e427]
                    - button "Add Tim Robbins to favorite people" [ref=e428] [cursor=pointer]
                    - link "Go to Tim Robbins" [ref=e430] [cursor=pointer]:
                      - /url: /name/nm0000209/?ref_=tt_cst_i_1
                  - generic [ref=e432]:
                    - link "Tim Robbins" [ref=e433] [cursor=pointer]:
                      - /url: /name/nm0000209/?ref_=tt_cst_t_1
                    - link "Andy Dufresne" [ref=e435] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000209/?ref_=tt_cst_c_1
                - generic [ref=e436]:
                  - group [ref=e438]:
                    - img "Morgan Freeman" [ref=e440]
                    - button "Add Morgan Freeman to favorite people" [ref=e441] [cursor=pointer]
                    - link "Go to Morgan Freeman" [ref=e443] [cursor=pointer]:
                      - /url: /name/nm0000151/?ref_=tt_cst_i_2
                  - generic [ref=e445]:
                    - link "Morgan Freeman" [ref=e446] [cursor=pointer]:
                      - /url: /name/nm0000151/?ref_=tt_cst_t_2
                    - link "Ellis Boyd 'Red' Redding" [ref=e448] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000151/?ref_=tt_cst_c_2
                - generic [ref=e449]:
                  - group [ref=e451]:
                    - img "Bob Gunton" [ref=e453]
                    - button "Add Bob Gunton to favorite people" [ref=e454] [cursor=pointer]
                    - link "Go to Bob Gunton" [ref=e456] [cursor=pointer]:
                      - /url: /name/nm0348409/?ref_=tt_cst_i_3
                  - generic [ref=e458]:
                    - link "Bob Gunton" [ref=e459] [cursor=pointer]:
                      - /url: /name/nm0348409/?ref_=tt_cst_t_3
                    - link "Warden Norton" [ref=e461] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0348409/?ref_=tt_cst_c_3
                - generic [ref=e462]:
                  - group [ref=e464]:
                    - img "William Sadler" [ref=e466]
                    - button "Add William Sadler to favorite people" [ref=e467] [cursor=pointer]
                    - link "Go to William Sadler" [ref=e469] [cursor=pointer]:
                      - /url: /name/nm0006669/?ref_=tt_cst_i_4
                  - generic [ref=e471]:
                    - link "William Sadler" [ref=e472] [cursor=pointer]:
                      - /url: /name/nm0006669/?ref_=tt_cst_t_4
                    - link "Heywood" [ref=e474] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0006669/?ref_=tt_cst_c_4
                - generic [ref=e475]:
                  - group [ref=e477]:
                    - img "Clancy Brown" [ref=e479]
                    - button "Add Clancy Brown to favorite people" [ref=e480] [cursor=pointer]
                    - link "Go to Clancy Brown" [ref=e482] [cursor=pointer]:
                      - /url: /name/nm0000317/?ref_=tt_cst_i_5
                  - generic [ref=e484]:
                    - link "Clancy Brown" [ref=e485] [cursor=pointer]:
                      - /url: /name/nm0000317/?ref_=tt_cst_t_5
                    - link "Captain Hadley" [ref=e487] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000317/?ref_=tt_cst_c_5
                - generic [ref=e488]:
                  - group [ref=e490]:
                    - img "Gil Bellows" [ref=e492]
                    - button "Add Gil Bellows to favorite people" [ref=e493] [cursor=pointer]
                    - link "Go to Gil Bellows" [ref=e495] [cursor=pointer]:
                      - /url: /name/nm0004743/?ref_=tt_cst_i_6
                  - generic [ref=e497]:
                    - link "Gil Bellows" [ref=e498] [cursor=pointer]:
                      - /url: /name/nm0004743/?ref_=tt_cst_t_6
                    - link "Tommy" [ref=e500] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0004743/?ref_=tt_cst_c_6
                - generic [ref=e501]:
                  - group [ref=e503]:
                    - img "Mark Rolston" [ref=e505]
                    - button "Add Mark Rolston to favorite people" [ref=e506] [cursor=pointer]
                    - link "Go to Mark Rolston" [ref=e508] [cursor=pointer]:
                      - /url: /name/nm0001679/?ref_=tt_cst_i_7
                  - generic [ref=e510]:
                    - link "Mark Rolston" [ref=e511] [cursor=pointer]:
                      - /url: /name/nm0001679/?ref_=tt_cst_t_7
                    - link "Bogs Diamond" [ref=e513] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0001679/?ref_=tt_cst_c_7
                - generic [ref=e514]:
                  - group [ref=e516]:
                    - img "James Whitmore" [ref=e518]
                    - button "Add James Whitmore to favorite people" [ref=e519] [cursor=pointer]
                    - link "Go to James Whitmore" [ref=e521] [cursor=pointer]:
                      - /url: /name/nm0926235/?ref_=tt_cst_i_8
                  - generic [ref=e523]:
                    - link "James Whitmore" [ref=e524] [cursor=pointer]:
                      - /url: /name/nm0926235/?ref_=tt_cst_t_8
                    - link "Brooks Hatlen" [ref=e526] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0926235/?ref_=tt_cst_c_8
                - generic [ref=e527]:
                  - group [ref=e529]:
                    - img "Jeffrey DeMunn" [ref=e531]
                    - button "Add Jeffrey DeMunn to favorite people" [ref=e532] [cursor=pointer]
                    - link "Go to Jeffrey DeMunn" [ref=e534] [cursor=pointer]:
                      - /url: /name/nm0218810/?ref_=tt_cst_i_9
                  - generic [ref=e536]:
                    - link "Jeffrey DeMunn" [ref=e537] [cursor=pointer]:
                      - /url: /name/nm0218810/?ref_=tt_cst_t_9
                    - link "1946 D.A." [ref=e539] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0218810/?ref_=tt_cst_c_9
                - generic [ref=e540]:
                  - group [ref=e542]:
                    - img "Larry Brandenburg" [ref=e544]
                    - button "Add Larry Brandenburg to favorite people" [ref=e545] [cursor=pointer]
                    - link "Go to Larry Brandenburg" [ref=e547] [cursor=pointer]:
                      - /url: /name/nm0104594/?ref_=tt_cst_i_10
                  - generic [ref=e549]:
                    - link "Larry Brandenburg" [ref=e550] [cursor=pointer]:
                      - /url: /name/nm0104594/?ref_=tt_cst_t_10
                    - link "Skeet" [ref=e552] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0104594/?ref_=tt_cst_c_10
                - generic [ref=e553]:
                  - group [ref=e555]:
                    - img "Neil Giuntoli" [ref=e557]
                    - button "Add Neil Giuntoli to favorite people" [ref=e558] [cursor=pointer]
                    - link "Go to Neil Giuntoli" [ref=e560] [cursor=pointer]:
                      - /url: /name/nm0321358/?ref_=tt_cst_i_11
                  - generic [ref=e562]:
                    - link "Neil Giuntoli" [ref=e563] [cursor=pointer]:
                      - /url: /name/nm0321358/?ref_=tt_cst_t_11
                    - link "Jigger" [ref=e565] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0321358/?ref_=tt_cst_c_11
                - generic [ref=e566]:
                  - group [ref=e568]:
                    - img "Brian Libby" [ref=e570]
                    - button "Add Brian Libby to favorite people" [ref=e571] [cursor=pointer]
                    - link "Go to Brian Libby" [ref=e573] [cursor=pointer]:
                      - /url: /name/nm0508742/?ref_=tt_cst_i_12
                  - generic [ref=e575]:
                    - link "Brian Libby" [ref=e576] [cursor=pointer]:
                      - /url: /name/nm0508742/?ref_=tt_cst_t_12
                    - link "Floyd" [ref=e578] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0508742/?ref_=tt_cst_c_12
                - generic [ref=e579]:
                  - group [ref=e581]:
                    - img "David Proval" [ref=e583]
                    - button "Add David Proval to favorite people" [ref=e584] [cursor=pointer]
                    - link "Go to David Proval" [ref=e586] [cursor=pointer]:
                      - /url: /name/nm0698998/?ref_=tt_cst_i_13
                  - generic [ref=e588]:
                    - link "David Proval" [ref=e589] [cursor=pointer]:
                      - /url: /name/nm0698998/?ref_=tt_cst_t_13
                    - link "Snooze" [ref=e591] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0698998/?ref_=tt_cst_c_13
                - generic [ref=e592]:
                  - group [ref=e594]:
                    - img "Joseph Ragno" [ref=e596]
                    - button "Add Joseph Ragno to favorite people" [ref=e597] [cursor=pointer]
                    - link "Go to Joseph Ragno" [ref=e599] [cursor=pointer]:
                      - /url: /name/nm0706554/?ref_=tt_cst_i_14
                  - generic [ref=e601]:
                    - link "Joseph Ragno" [ref=e602] [cursor=pointer]:
                      - /url: /name/nm0706554/?ref_=tt_cst_t_14
                    - link "Ernie" [ref=e604] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0706554/?ref_=tt_cst_c_14
                - generic [ref=e605]:
                  - group [ref=e607]:
                    - img "Jude Ciccolella" [ref=e609]
                    - button "Add Jude Ciccolella to favorite people" [ref=e610] [cursor=pointer]
                    - link "Go to Jude Ciccolella" [ref=e612] [cursor=pointer]:
                      - /url: /name/nm0161980/?ref_=tt_cst_i_15
                  - generic [ref=e614]:
                    - link "Jude Ciccolella" [ref=e615] [cursor=pointer]:
                      - /url: /name/nm0161980/?ref_=tt_cst_t_15
                    - link "Guard Mert" [ref=e617] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0161980/?ref_=tt_cst_c_15
                - generic [ref=e618]:
                  - group [ref=e620]:
                    - img "Paul McCrane" [ref=e622]
                    - button "Add Paul McCrane to favorite people" [ref=e623] [cursor=pointer]
                    - link "Go to Paul McCrane" [ref=e625] [cursor=pointer]:
                      - /url: /name/nm0005204/?ref_=tt_cst_i_16
                  - generic [ref=e627]:
                    - link "Paul McCrane" [ref=e628] [cursor=pointer]:
                      - /url: /name/nm0005204/?ref_=tt_cst_t_16
                    - link "Guard Trout" [ref=e630] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0005204/?ref_=tt_cst_c_16
                - generic [ref=e631]:
                  - group [ref=e633]:
                    - img [ref=e635]
                    - button "Add Renee Blaine to favorite people" [ref=e637] [cursor=pointer]
                    - link "Go to Renee Blaine" [ref=e639] [cursor=pointer]:
                      - /url: /name/nm0086169/?ref_=tt_cst_i_17
                  - generic [ref=e641]:
                    - link "Renee Blaine" [ref=e642] [cursor=pointer]:
                      - /url: /name/nm0086169/?ref_=tt_cst_t_17
                    - link "Andy Dufresne's Wife" [ref=e644] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0086169/?ref_=tt_cst_c_17
                - generic [ref=e645]:
                  - group [ref=e647]:
                    - img [ref=e649]
                    - button "Add Scott Mann to favorite people" [ref=e651] [cursor=pointer]
                    - link "Go to Scott Mann" [ref=e653] [cursor=pointer]:
                      - /url: /name/nm0542957/?ref_=tt_cst_i_18
                  - generic [ref=e655]:
                    - link "Scott Mann" [ref=e656] [cursor=pointer]:
                      - /url: /name/nm0542957/?ref_=tt_cst_t_18
                    - link "Glenn Quentin" [ref=e658] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0542957/?ref_=tt_cst_c_18
            - generic [ref=e659]: Director
            - link "Frank Darabont" [ref=e661] [cursor=pointer]:
              - /url: /name/nm0001104/?ref_=tt_cst_1_1
            - generic [ref=e662]: Writers
            - generic [ref=e663]:
              - link "Stephen King" [ref=e664] [cursor=pointer]:
                - /url: /name/nm0000175/?ref_=tt_cst_2_1
              - link "Frank Darabont" [ref=e665] [cursor=pointer]:
                - /url: /name/nm0001104/?ref_=tt_cst_2_2
            - link "See full cast and crew" [ref=e666] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
              - text: All cast & crew
            - link "See full cast and crew" [ref=e667] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
            - link "Production, box office & more at IMDbPro" [ref=e670] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - link "Production, box office & more at IMDbPro" [ref=e671] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
          - generic [ref=e673]:
            - generic [ref=e675]:
              - link "User reviews 11.8K" [ref=e676] [cursor=pointer]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ururv_sm
                - heading "User reviews 11.8K" [level=3] [ref=e677]:
                  - generic [ref=e678]: User reviews
                  - generic [ref=e679]: 11.8K
              - button "Review" [ref=e682] [cursor=pointer]:
                - generic [ref=e684]: Review
            - generic [ref=e685]:
              - generic [ref=e686]:
                - generic [ref=e689]: "9.3"
                - generic [ref=e690]: 3192.3K
              - generic [ref=e692]:
                - link "43914 1-star reviews. Select to read them." [ref=e693] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=1&ref_=tt_ururv_histo_1
                  - generic [ref=e697]: "1"
                - link "5661 2-star reviews. Select to read them." [ref=e698] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=2&ref_=tt_ururv_histo_2
                  - generic [ref=e702]: "2"
                - link "6148 3-star reviews. Select to read them." [ref=e703] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=3&ref_=tt_ururv_histo_3
                  - generic [ref=e707]: "3"
                - link "8401 4-star reviews. Select to read them." [ref=e708] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=4&ref_=tt_ururv_histo_4
                  - generic [ref=e712]: "4"
                - link "17820 5-star reviews. Select to read them." [ref=e713] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=5&ref_=tt_ururv_histo_5
                  - generic [ref=e717]: "5"
                - link "34976 6-star reviews. Select to read them." [ref=e718] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=6&ref_=tt_ururv_histo_6
                  - generic [ref=e722]: "6"
                - link "118376 7-star reviews. Select to read them." [ref=e723] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=7&ref_=tt_ururv_histo_7
                  - generic [ref=e727]: "7"
                - link "376613 8-star reviews. Select to read them." [ref=e728] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=8&ref_=tt_ururv_histo_8
                  - generic [ref=e732]: "8"
                - link "827544 9-star reviews. Select to read them." [ref=e733] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=9&ref_=tt_ururv_histo_9
                  - generic [ref=e737]: "9"
                - link "1752866 10-star reviews. Select to read them." [ref=e738] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=10&ref_=tt_ururv_histo_10
                  - generic [ref=e742]: "10"
            - heading "Featured reviews" [level=3] [ref=e745]
            - group [ref=e746]:
              - generic [ref=e747]:
                - generic [ref=e748] [cursor=pointer]:
                  - generic [ref=e749]:
                    - link "User alexkolokotronis" [ref=e751]:
                      - /url: /user/p.2vibpa6e4h2oc5snny6pkkmzb4/?ref_=tt_ururv_c_1_uname
                      - generic [ref=e752]:
                        - group [ref=e753]:
                          - generic [ref=e754]:
                            - img [ref=e756]
                            - img "Placeholder profile image" [ref=e758]
                        - generic [ref=e762]: alexkolokotronis
                    - generic "Author rating is 10" [ref=e763]:
                      - generic [ref=e765]: "10"
                  - link "This is How Movies Should Be Made" [ref=e767]:
                    - /url: /title/tt0111161/reviews/?featured=rw1822343&ref_=tt_ururv_c_1_hd
                    - heading "This is How Movies Should Be Made" [level=3] [ref=e768]
                  - text: This movie is not your ordinary Hollywood flick. It has a great and deep message. This movie has a foundation and just kept on being built on from their and that foundation is hope.
                  - text: Other than just the message of this movie the acting was phenomenal. Tim Robbins gave one of the greatest performances ever. He was inspiring, intelligent and most of all positive. His performance just made me smile. Robbins plays Andy Dufresne who was wrongfully convicted of murdering his wife and her lover. He is gets to life sentences but yet never gives up hope. In he becomes friends with Ellis Boyd "Red" Redding played by Morgan Freeman. Freeman who gives the finest performance of his career has unlike Robbins lost hope. He is in deep regret of the crime that he committed. His way of deflecting the pain away is by trying to not feel anything at all. With his friendship with Andy he learns that without our hopes and dreams we have nothing. Andy also becomes friends with the rest of Red's group. James Whitmore also gave a great performance as Brooks Halten who gets out of prison parole but in the words of Red he has been "institutionalized".
                  - text: The directing by Frank Darabont was just magnificent. He kept this movie at a great steady pace along with the writing and great cinematography. He portrayed prison life in such a horrifying way, but not in terms of the physical pain but the stress and pain that wares mentally on the inmates, some of which deserve a second chance.
                  - text: Whatever you do, don't listen to the people who say this movie is overrated because this is one of the most inspiring and greatest movies ever. It has everything you could possibly want.
                - generic [ref=e769] [cursor=pointer]:
                  - generic [ref=e770]:
                    - link "User gavin6942" [ref=e772]:
                      - /url: /user/p.ipulzcdf6eohek3d5zte3h6zz4/?ref_=tt_ururv_c_2_uname
                      - generic [ref=e773]:
                        - group [ref=e774]:
                          - generic [ref=e776]:
                            - img "Avatar"
                        - generic [ref=e779]: gavin6942
                    - generic "Author rating is 10" [ref=e780]:
                      - generic [ref=e782]: "10"
                  - link "IMDb and the Greatest Film of All Time" [ref=e784]:
                    - /url: /title/tt0111161/reviews/?featured=rw3118520&ref_=tt_ururv_c_2_hd
                    - heading "IMDb and the Greatest Film of All Time" [level=3] [ref=e785]
                  - text: Two imprisoned men (Tim Robbins and Morgan Freeman) bond over a number of years, finding solace and eventual redemption through acts of common decency.
                  - text: Is this the greatest film of all time? IMDb would have you believe so. Despite being a box office flop (that barely recouped its budget), the film received multiple award nominations and outstanding reviews from critics for its acting, story, and realism. It has since been successful on cable television, VHS, DVD, and Blu-ray.
                  - text: And it deserves this praise that seems to be growing each year. Now twenty years old, the film has not aged a day, and instead seems to be getting better. This is Tim Robbins' best role, and a fine performance from the always wonderful Morgan Freeman.
                - generic [ref=e786] [cursor=pointer]:
                  - generic [ref=e787]:
                    - link "User auuwws" [ref=e789]:
                      - /url: /user/p.x772cyhwydc5c2oj2r265uncjy/?ref_=tt_ururv_c_3_uname
                      - generic [ref=e790]:
                        - group [ref=e791]:
                          - generic [ref=e793]:
                            - img "Avatar"
                        - generic [ref=e796]: auuwws
                    - generic "Author rating is 10" [ref=e797]:
                      - generic [ref=e799]: "10"
                  - link "the shawshank redemption" [ref=e801]:
                    - /url: /title/tt0111161/reviews/?featured=rw6158379&ref_=tt_ururv_c_3_hd
                    - heading "the shawshank redemption" [level=3] [ref=e802]
                  - text: The best movie in history and the best ending in any entertainment business
                - generic [ref=e803] [cursor=pointer]:
                  - generic [ref=e804]:
                    - link "User Sleepin_Dragon" [ref=e806]:
                      - /url: /user/p.nadoqibapcutzfhtliuzriogla/?ref_=tt_ururv_c_4_uname
                      - generic [ref=e807]:
                        - group [ref=e808]:
                          - generic [ref=e810]:
                            - img "Avatar"
                        - generic [ref=e813]: Sleepin_Dragon
                    - generic "Author rating is 10" [ref=e814]:
                      - generic [ref=e816]: "10"
                  - link "An incredible movie. One that lives with you." [ref=e818]:
                    - /url: /title/tt0111161/reviews/?featured=rw6606154&ref_=tt_ururv_c_4_hd
                    - heading "An incredible movie. One that lives with you." [level=3] [ref=e819]
                  - text: It is no wonder that the film has such a high rating, it is quite literally breathtaking. What can I say that hasn't said before? Not much, it's the story, the acting, the premise, but most of all, this movie is about how it makes you feel. Sometimes you watch a film, and can't remember it days later, this film loves with you, once you've seen it, you don't forget.
                  - text: The ultimate story of friendship, of hope, and of life, and overcoming adversity.
                  - text: I understand why so many class this as the best film of all time, it isn't mine, but I get it. If you haven't seen it, or haven't seen it for some time, you need to watch it, it's amazing. 10/10.
                - generic [ref=e820] [cursor=pointer]:
                  - generic [ref=e821]:
                    - link "User baumer" [ref=e823]:
                      - /url: /user/p.odocrgj5lvfevutk3rukg7nqji/?ref_=tt_ururv_c_5_uname
                      - generic [ref=e824]:
                        - group [ref=e825]:
                          - generic [ref=e827]:
                            - img "Avatar"
                        - generic [ref=e830]: baumer
                    - generic "Author rating is 10" [ref=e831]:
                      - generic [ref=e833]: "10"
                  - link "Stephen King's best adapted movie" [ref=e835]:
                    - /url: /title/tt0111161/reviews/?featured=rw0348302&ref_=tt_ururv_c_5_hd
                    - heading "Stephen King's best adapted movie" [level=3] [ref=e836]
                  - text: Misery and Stand By Me were the best adaptations up until this one, now you can add Shawshank to that list.
                  - text: "This is simply one of the best films ever made and I know I am not the first to say that and I certainly won't be the last. The standing on the IMDb is a true barometer of that. #3 as of this date and I'm sure it could be number 1. So I'll just skip all the normal praise of the film because we all know how great it is. But let me perhaps add that what I find so fascinating about Shawshank is that Stephen King wrote it."
                  - text: King is one of the best writers in the world. Books like IT and the Castle Rock series are some of the greatest stories ever told. But his best adaptations are always done by the best directors. The Shining was brilliantly interpreted by Kubrick and of course the aforementioned Misery and Stand By Me are both by Rob Reiner. Now Frank Darabont comes onto the scene and makes arguably the best King film ever. He seems to understand what King wants to say and he conveys that beautifully.
                  - text: What makes this film one of the best ever made is the message it conveys. It is one of eternal hope. Andy Dufresne, played by Tim Robbins, has been sent to prison for a crime he did not commit. But he never loses hope. He never gives up his quest to become a free man again. His years of tenacity, patience and wits keep him not only sane, but it gives his mind and a spirit a will to live. This film has a different feel to it. There has never been anything like it before and I don't know if there will again.
                  - text: I'm not going to say any more about this film, it has already been said, but just suffice to say that I am glad that Forrest Gump won best picture in 94. I would have been equally glad if Pulp Fiction or Shawshank would have won. It is that good of a movie and one that will be appreciated for years to come.
          - generic [ref=e840]:
            - generic [ref=e841]:
              - heading "'The Shawshank Redemption' Without Morgan Freeman?" [level=2] [ref=e842]
              - emphasis [ref=e843]:
                - link "The Shawshank Redemption" [ref=e844] [cursor=pointer]:
                  - /url: /title/tt0111161/?ref_=tt_eds_center-3_lk
              - text: has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?
              - link "Who almost starred?" [ref=e845] [cursor=pointer]:
                - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_c_vd_cc_shs_cta
            - group [ref=e847]:
              - group [ref=e848]:
                - img "Editorial Image" [ref=e850]
                - link "2:25" [ref=e851] [cursor=pointer]:
                  - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_vd_cc_shs_i
                  - generic [ref=e856]: 2:25
          - generic [ref=e859]:
            - generic [ref=e861]:
              - heading "More like this" [level=3] [ref=e863]:
                - generic [ref=e864]: More like this
              - link "More information" [ref=e866] [cursor=pointer]:
                - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
            - group [ref=e869]:
              - generic [ref=e870]:
                - group [ref=e871]:
                  - group [ref=e872]:
                    - generic [ref=e873]:
                      - img "The Godfather"
                    - button "Add to Watchlist" [ref=e874] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e879] [cursor=pointer]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_i_1
                  - generic [ref=e881]:
                    - generic [ref=e884]: "9.2"
                    - button "Rate The Godfather" [ref=e885] [cursor=pointer]
                  - link "View title page for The Godfather" [ref=e888] [cursor=pointer]:
                    - /url: /title/tt0068646/?ref_=tt_mlt_t_1
                    - text: The Godfather
                  - button "More about this" [ref=e893] [cursor=pointer]
                - group [ref=e896]:
                  - group [ref=e897]:
                    - generic [ref=e898]:
                      - img "The Dark Knight"
                    - button "Add to Watchlist" [ref=e899] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e904] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_i_2
                  - generic [ref=e906]:
                    - generic [ref=e909]: "9.1"
                    - button "Rate The Dark Knight" [ref=e910] [cursor=pointer]
                  - link "View title page for The Dark Knight" [ref=e913] [cursor=pointer]:
                    - /url: /title/tt0468569/?ref_=tt_mlt_t_2
                    - text: The Dark Knight
                  - button "More about this" [ref=e918] [cursor=pointer]
                - group [ref=e921]:
                  - group [ref=e922]:
                    - generic [ref=e923]:
                      - img "Forrest Gump"
                    - button "Add to Watchlist" [ref=e924] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e929] [cursor=pointer]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_i_3
                  - generic [ref=e931]:
                    - generic [ref=e934]: "8.8"
                    - button "Rate Forrest Gump" [ref=e935] [cursor=pointer]
                  - link "View title page for Forrest Gump" [ref=e938] [cursor=pointer]:
                    - /url: /title/tt0109830/?ref_=tt_mlt_t_3
                    - text: Forrest Gump
                  - button "More about this" [ref=e943] [cursor=pointer]
                - group [ref=e946]:
                  - group [ref=e947]:
                    - generic [ref=e948]:
                      - img "Fight Club"
                    - button "Add to Watchlist" [ref=e949] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e954] [cursor=pointer]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_i_4
                  - generic [ref=e956]:
                    - generic [ref=e959]: "8.8"
                    - button "Rate Fight Club" [ref=e960] [cursor=pointer]
                  - link "View title page for Fight Club" [ref=e963] [cursor=pointer]:
                    - /url: /title/tt0137523/?ref_=tt_mlt_t_4
                    - text: Fight Club
                  - button "More about this" [ref=e968] [cursor=pointer]
                - group [ref=e971]:
                  - group [ref=e972]:
                    - generic [ref=e973]:
                      - img "Inception"
                    - button "Add to Watchlist" [ref=e974] [cursor=pointer]
                    - link "View title page for Inception" [ref=e979] [cursor=pointer]:
                      - /url: /title/tt1375666/?ref_=tt_mlt_i_5
                  - generic [ref=e981]:
                    - generic [ref=e984]: "8.8"
                    - button "Rate Inception" [ref=e985] [cursor=pointer]
                  - link "View title page for Inception" [ref=e988] [cursor=pointer]:
                    - /url: /title/tt1375666/?ref_=tt_mlt_t_5
                    - text: Inception
                  - button "More about this" [ref=e993] [cursor=pointer]
                - group [ref=e996]:
                  - group [ref=e997]:
                    - generic [ref=e998]:
                      - img "Seven"
                    - button "Add to Watchlist" [ref=e999] [cursor=pointer]
                    - link "View title page for Seven" [ref=e1004] [cursor=pointer]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_i_6
                  - generic [ref=e1006]:
                    - generic [ref=e1009]: "8.6"
                    - button "Rate Seven" [ref=e1010] [cursor=pointer]
                  - link "View title page for Seven" [ref=e1013] [cursor=pointer]:
                    - /url: /title/tt0114369/?ref_=tt_mlt_t_6
                    - text: Seven
                  - button "More about this" [ref=e1018] [cursor=pointer]
                - group [ref=e1021]:
                  - group [ref=e1022]:
                    - generic [ref=e1023]:
                      - img "Pulp Fiction"
                    - button "Add to Watchlist" [ref=e1024] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e1029] [cursor=pointer]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_i_7
                  - generic [ref=e1031]:
                    - generic [ref=e1034]: "8.8"
                    - button "Rate Pulp Fiction" [ref=e1035] [cursor=pointer]
                  - link "View title page for Pulp Fiction" [ref=e1038] [cursor=pointer]:
                    - /url: /title/tt0110912/?ref_=tt_mlt_t_7
                    - text: Pulp Fiction
                  - button "More about this" [ref=e1043] [cursor=pointer]
                - group [ref=e1046]:
                  - group [ref=e1047]:
                    - generic [ref=e1048]:
                      - img "Interstellar"
                    - button "Add to Watchlist" [ref=e1049] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e1054] [cursor=pointer]:
                      - /url: /title/tt0816692/?ref_=tt_mlt_i_8
                  - generic [ref=e1056]:
                    - generic [ref=e1059]: "8.7"
                    - button "Rate Interstellar" [ref=e1060] [cursor=pointer]
                  - link "View title page for Interstellar" [ref=e1063] [cursor=pointer]:
                    - /url: /title/tt0816692/?ref_=tt_mlt_t_8
                    - text: Interstellar
                  - button "More about this" [ref=e1068] [cursor=pointer]
                - group [ref=e1071]:
                  - group [ref=e1072]:
                    - generic [ref=e1073]:
                      - img "The Green Mile"
                    - button "Add to Watchlist" [ref=e1074] [cursor=pointer]
                    - link "View title page for The Green Mile" [ref=e1079] [cursor=pointer]:
                      - /url: /title/tt0120689/?ref_=tt_mlt_i_9
                  - generic [ref=e1081]:
                    - generic [ref=e1084]: "8.6"
                    - button "Rate The Green Mile" [ref=e1085] [cursor=pointer]
                  - link "View title page for The Green Mile" [ref=e1088] [cursor=pointer]:
                    - /url: /title/tt0120689/?ref_=tt_mlt_t_9
                    - text: The Green Mile
                  - button "More about this" [ref=e1093] [cursor=pointer]
                - group [ref=e1096]:
                  - group [ref=e1097]:
                    - generic [ref=e1098]:
                      - img "The Godfather Part II"
                    - button "Add to Watchlist" [ref=e1099] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e1104] [cursor=pointer]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_i_10
                  - generic [ref=e1106]:
                    - generic [ref=e1109]: "9.0"
                    - button "Rate The Godfather Part II" [ref=e1110] [cursor=pointer]
                  - link "View title page for The Godfather Part II" [ref=e1113] [cursor=pointer]:
                    - /url: /title/tt0071562/?ref_=tt_mlt_t_10
                    - text: The Godfather Part II
                  - button "More about this" [ref=e1118] [cursor=pointer]
                - group [ref=e1121]:
                  - group [ref=e1122]:
                    - generic [ref=e1123]:
                      - img "Schindler's List"
                    - button "Add to Watchlist" [ref=e1124] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e1129] [cursor=pointer]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_i_11
                  - generic [ref=e1131]:
                    - generic [ref=e1134]: "9.0"
                    - button "Rate Schindler's List" [ref=e1135] [cursor=pointer]
                  - link "View title page for Schindler's List" [ref=e1138] [cursor=pointer]:
                    - /url: /title/tt0108052/?ref_=tt_mlt_t_11
                    - text: Schindler's List
                  - button "More about this" [ref=e1143] [cursor=pointer]
                - group [ref=e1146]:
                  - group [ref=e1147]:
                    - generic [ref=e1148]:
                      - 'img "The Lord of the Rings: The Return of the King"'
                    - button "Add to Watchlist" [ref=e1149] [cursor=pointer]
                    - 'link "View title page for The Lord of the Rings: The Return of the King" [ref=e1154] [cursor=pointer]':
                      - /url: /title/tt0167260/?ref_=tt_mlt_i_12
                  - generic [ref=e1156]:
                    - generic [ref=e1159]: "9.0"
                    - 'button "Rate The Lord of the Rings: The Return of the King" [ref=e1160] [cursor=pointer]'
                  - 'link "View title page for The Lord of the Rings: The Return of the King" [ref=e1163] [cursor=pointer]':
                    - /url: /title/tt0167260/?ref_=tt_mlt_t_12
                    - text: "The Lord of the Rings: The Return of the King"
                  - button "More about this" [ref=e1168] [cursor=pointer]
          - generic [ref=e1171]:
            - link "Related interests" [ref=e1173] [cursor=pointer]:
              - /url: /interest/all/?ref_=tt_rin_sm
              - heading "Related interests" [level=3] [ref=e1174]:
                - generic [ref=e1175]: Related interests
            - group [ref=e1177]:
              - generic [ref=e1178]:
                - generic [ref=e1179]:
                  - group [ref=e1180]:
                    - generic [ref=e1181]:
                      - img "Orson Welles in Citizen Kane (1941)"
                    - button "Add Epic to your interests" [ref=e1182] [cursor=pointer]
                    - link "Epic" [ref=e1184] [cursor=pointer]:
                      - /url: /interest/in0000077/?ref_=tt_rin_in_i_1
                  - link "Epic" [ref=e1186] [cursor=pointer]:
                    - /url: /interest/in0000077/?ref_=tt_rin_in_t_1
                    - generic [ref=e1187]: Epic
                - generic [ref=e1188]:
                  - group [ref=e1189]:
                    - generic [ref=e1190]:
                      - img "Emma Watson, Saoirse Ronan, Florence Pugh, and Eliza Scanlen in Little Women (2019)"
                    - button "Add Period Drama to your interests" [ref=e1191] [cursor=pointer]
                    - link "Period Drama" [ref=e1193] [cursor=pointer]:
                      - /url: /interest/in0000083/?ref_=tt_rin_in_i_2
                  - link "Period Drama" [ref=e1195] [cursor=pointer]:
                    - /url: /interest/in0000083/?ref_=tt_rin_in_t_2
                    - generic [ref=e1196]: Period Drama
                - generic [ref=e1197]:
                  - group [ref=e1198]:
                    - generic [ref=e1199]:
                      - img "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)"
                    - button "Add Prison Drama to your interests" [ref=e1200] [cursor=pointer]
                    - link "Prison Drama" [ref=e1202] [cursor=pointer]:
                      - /url: /interest/in0000085/?ref_=tt_rin_in_i_3
                  - link "Prison Drama" [ref=e1204] [cursor=pointer]:
                    - /url: /interest/in0000085/?ref_=tt_rin_in_t_3
                    - generic [ref=e1205]: Prison Drama
                - generic [ref=e1206]:
                  - group [ref=e1207]:
                    - generic [ref=e1208]:
                      - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                    - button "Add Psychological Drama to your interests" [ref=e1209] [cursor=pointer]
                    - link "Psychological Drama" [ref=e1211] [cursor=pointer]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_i_4
                  - link "Psychological Drama" [ref=e1213] [cursor=pointer]:
                    - /url: /interest/in0000086/?ref_=tt_rin_in_t_4
                    - generic [ref=e1214]: Psychological Drama
                - generic [ref=e1215]:
                  - group [ref=e1216]:
                    - generic [ref=e1217]:
                      - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                    - button "Add Drama to your interests" [ref=e1218] [cursor=pointer]
                    - link "Drama" [ref=e1220] [cursor=pointer]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_i_5
                  - link "Drama" [ref=e1222] [cursor=pointer]:
                    - /url: /interest/in0000076/?ref_=tt_rin_in_t_5
                    - generic [ref=e1223]: Drama
          - generic [ref=e1226]:
            - link "Storyline" [ref=e1227] [cursor=pointer]:
              - /url: "#storyline"
              - heading "Storyline" [level=3] [ref=e1228]:
                - generic [ref=e1229]: Storyline
            - 'button "Storyline: edit" [ref=e1233] [cursor=pointer]':
              - generic [ref=e1236]: Edit
          - generic [ref=e1238]:
            - generic [ref=e1240]:
              - heading "Did you know" [level=3] [ref=e1242]:
                - generic [ref=e1243]: Did you know
              - 'button "Did you know: edit" [ref=e1245] [cursor=pointer]':
                - generic [ref=e1248]: Edit
            - generic [ref=e1249]:
              - link "See more" [ref=e1250] [cursor=pointer]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
                - text: Trivia
              - generic [ref=e1252] [cursor=pointer]:
                - button "See more" [ref=e1253]
                - generic [ref=e1258]:
                  - text: Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director
                  - link "Frank Darabont" [ref=e1259]:
                    - /url: /name/nm0001104/?ref_=dyk_trv
                  - text: insisted on many takes of the scene before he was satisfied.
                  - link "Morgan Freeman" [ref=e1260]:
                    - /url: /name/nm0000151/?ref_=dyk_trv
                  - text: threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.
              - link "See more" [ref=e1261] [cursor=pointer]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
            - generic [ref=e1264]:
              - link "See more" [ref=e1265] [cursor=pointer]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
                - text: Goofs
              - generic [ref=e1267] [cursor=pointer]:
                - button "See more" [ref=e1268]
                - generic [ref=e1273]:
                  - text: Circa 1963, Heywood is shown listening to the record "24 of
                  - link "Hank Williams" [ref=e1274]:
                    - /url: /name/nm0930729/?ref_=dyk_gf
                  - text: "' Greatest Hits\", released in 1970."
              - link "See more" [ref=e1275] [cursor=pointer]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
            - generic [ref=e1278]:
              - link "See more" [ref=e1279] [cursor=pointer]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
                - text: Quotes
              - generic [ref=e1281] [cursor=pointer]:
                - button "See more" [ref=e1282]
                - list [ref=e1287]:
                  - listitem [ref=e1288]:
                    - link "Andy Dufresne" [ref=e1289]:
                      - /url: /name/nm0000209/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1290]: to Red
                    - text: "] I guess it comes down to a simple choice, really. Get busy living, or get busy dying."
              - link "See more" [ref=e1291] [cursor=pointer]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
            - generic [ref=e1294]:
              - link "See more" [ref=e1295] [cursor=pointer]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
                - text: Crazy credits
              - generic [ref=e1297] [cursor=pointer]:
                - button "See more" [ref=e1298]
                - generic [ref=e1303]: The man who cried and was beaten when Andy first arrived is listed and credited as "Fat Ass" -- the other inmates' nickname for him.
              - link "See more" [ref=e1304] [cursor=pointer]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
            - generic [ref=e1307]:
              - link "See more" [ref=e1308] [cursor=pointer]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
                - text: Alternate versions
              - generic [ref=e1310] [cursor=pointer]:
                - button "See more" [ref=e1311]
                - generic [ref=e1316]: This film was produced independently by Castle Rock Entertainment, but distributed by Columbia Pictures, which placed their logo at the beginning of the film. After the first video release, Castle Rock began to use Warner Bros. as their distributor. This film was then later re-issued on video and DVD by Warner Bros., which replaced the Columbia Pictures logo with their own. (The 1999 WB DVD uses no studio logo before Castle Rock [A Turner Company], and has no Columbia line-art logo at the end, just 10 seconds of blank screen as the music finishes. The post-2004 prints start with the 2003 WB logo and an updated Castle Rock logo [A TimeWarner Company], and have the Columbia line-art logo in the crawl at the end followed by a quick, still, 2003 WB logo. See also The American President.)
              - link "See more" [ref=e1317] [cursor=pointer]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
            - generic [ref=e1320]:
              - link "See more" [ref=e1321] [cursor=pointer]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
                - text: Connections
              - generic [ref=e1323] [cursor=pointer]:
                - button "See more" [ref=e1324]
                - generic [ref=e1327]:
                  - text: Featured in
                  - 'link "At the Movies with Ebert & Roeper: Why Gump? Why Now?" [ref=e1328]':
                    - /url: /title/tt1936736/?ref_=tt_dyk_cnn
                  - text: (1994)
              - link "See more" [ref=e1329] [cursor=pointer]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
            - generic [ref=e1332]:
              - link "See more" [ref=e1333] [cursor=pointer]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
                - text: Soundtracks
              - generic [ref=e1335] [cursor=pointer]:
                - button "See more" [ref=e1336]
                - generic [ref=e1339]:
                  - text: If I Didn't Care
                  - generic [ref=e1340]:
                    - text: by
                    - link "Jack Lawrence" [ref=e1341]:
                      - /url: /name/nm0492805/?ref_=dyk_snd
                  - generic [ref=e1342]:
                    - text: Performed by
                    - link "The Ink Spots" [ref=e1343]:
                      - /url: /name/nm1311414/?ref_=dyk_snd
                  - generic [ref=e1344]: Courtesy of MCA Records
              - link "See more" [ref=e1345] [cursor=pointer]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
          - generic [ref=e1349]:
            - generic [ref=e1350]:
              - link "Top picks" [ref=e1351] [cursor=pointer]:
                - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                - heading "Top picks" [level=3] [ref=e1352]:
                  - generic [ref=e1353]: Top picks
              - generic [ref=e1355]: Sign in to rate and Watchlist for personalized recommendations
            - link "Sign in" [ref=e1356] [cursor=pointer]:
              - /url: /registration/signin?ref_=tt_tpks_signin
              - generic [ref=e1357]: Sign in
          - generic [ref=e1359]:
            - link "FAQ 47" [ref=e1361] [cursor=pointer]:
              - /url: /title/tt0111161/faq/?ref_=tt_faq_sm
              - heading "FAQ 47" [level=3] [ref=e1362]:
                - generic [ref=e1363]: FAQ
                - generic [ref=e1364]: "47"
            - generic [ref=e1366]:
              - generic [ref=e1367] [cursor=pointer]:
                - link "How long is The Shawshank Redemption?" [ref=e1369]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                - generic [ref=e1370]: Powered by Alexa
              - link "See the answer" [ref=e1372] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
              - link "Does the novella explain why Fat Ass is in prison? He seems too much like a cry baby to have committed any crimes." [ref=e1377] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "See the answer" [ref=e1378] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "Why does Andy talk in code to Red at the movie about getting Rita Hayworth since they have already done business before and Andy asked for the rock hammer in the same way?" [ref=e1383] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "See the answer" [ref=e1384] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "Why is Captain Hadley so cruel?" [ref=e1389] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
              - link "See the answer" [ref=e1390] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
          - generic [ref=e1393]:
            - generic [ref=e1395]:
              - heading "Details" [level=3] [ref=e1397]:
                - generic [ref=e1398]: Details
              - 'button "Details: edit" [ref=e1400] [cursor=pointer]':
                - generic [ref=e1403]: Edit
            - generic [ref=e1404]:
              - link "See more" [ref=e1405] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - text: Release date
              - link "October 14, 1994 (United States)" [ref=e1407] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - link "See more" [ref=e1408] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - generic [ref=e1411]: Country of origin
              - link "United States" [ref=e1413] [cursor=pointer]:
                - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
              - generic "See more" [ref=e1414]: Official sites
              - generic [ref=e1415]:
                - link "Official Facebook" [ref=e1416] [cursor=pointer]:
                  - /url: https://www.facebook.com/shawshankredemptionfilm/
                  - text: Official Facebook
                - link "Warner Bros. (United States)" [ref=e1418] [cursor=pointer]:
                  - /url: https://www.warnerbros.com/movies/shawshank-redemption
                  - text: Warner Bros. (United States)
              - generic [ref=e1420]: Language
              - link "English" [ref=e1422] [cursor=pointer]:
                - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
              - link "See more" [ref=e1423] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                - text: Also known as
              - generic [ref=e1424] [cursor=pointer]: Sueño de fuga
              - link "See more" [ref=e1425] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
              - link "See more" [ref=e1428] [cursor=pointer]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                - text: Filming locations
              - generic [ref=e1429] [cursor=pointer]:
                - link "Butler, Ohio, USA" [ref=e1430]:
                  - /url: /search/title/?locations=Butler%40%40%40%20Ohio%40%40%40%20USA&ref_=tt_dt_loc
                - text: (Exterior, rural town of "Buxton" where "Red" journeys to; shot of bus leaving with "Red" near end of film)
              - link "See more" [ref=e1431] [cursor=pointer]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
              - link "See more" [ref=e1434] [cursor=pointer]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                - text: Production company
              - link "Castle Rock Entertainment" [ref=e1436] [cursor=pointer]:
                - /url: /company/co0040620/?ref_=tt_dt_cmpy_1
              - link "See more" [ref=e1437] [cursor=pointer]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
              - link "See more" [ref=e1440] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                - text: See more company credits at IMDbPro
              - link "See more" [ref=e1441] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
          - generic [ref=e1443]:
            - generic [ref=e1445]:
              - heading "Box office" [level=3] [ref=e1447]:
                - generic [ref=e1448]: Box office
              - 'button "Box office: edit" [ref=e1450] [cursor=pointer]':
                - generic [ref=e1453]: Edit
            - generic [ref=e1454]:
              - generic [ref=e1455]: Budget
              - generic [ref=e1456]: $25,000,000 (estimated)
              - generic [ref=e1457]: Gross US & Canada
              - generic [ref=e1458]: $28,767,189
              - generic [ref=e1459]: Opening weekend US & Canada
              - generic [ref=e1460]: $727,327 Sep 25, 1994
              - generic [ref=e1461]: Gross worldwide
              - generic [ref=e1462]: $29,420,884
              - generic [ref=e1463]:
                - link "Go to IMDbPro" [ref=e1464] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - img [ref=e1465]
                - link "See detailed box office info on IMDbPro" [ref=e1475] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - text: See detailed box office info on IMDbPro
          - generic [ref=e1477]:
            - generic [ref=e1479]:
              - link "Tech specs" [ref=e1480] [cursor=pointer]:
                - /url: /title/tt0111161/technical/?ref_=tt_spec_sm
                - heading "Tech specs" [level=3] [ref=e1481]:
                  - generic [ref=e1482]: Tech specs
              - 'button "Tech specs: edit" [ref=e1485] [cursor=pointer]':
                - generic [ref=e1488]: Edit
            - generic [ref=e1489]:
              - generic [ref=e1490]: Runtime
              - generic [ref=e1491]: 2h 22m(142 min)
              - generic [ref=e1492]: Color
              - link "Color" [ref=e1494] [cursor=pointer]:
                - /url: /search/title/?colors=color&ref_=tt_spec_att
              - generic [ref=e1495]: Sound mix
              - link "Dolby Digital" [ref=e1497] [cursor=pointer]:
                - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
              - generic [ref=e1498]: Aspect ratio
              - generic [ref=e1499]: "1.85 : 1"
          - generic [ref=e1503]:
            - generic [ref=e1504]:
              - link "Contribute to this page" [ref=e1505] [cursor=pointer]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                - heading "Contribute to this page" [level=3] [ref=e1506]:
                  - generic [ref=e1507]: Contribute to this page
              - generic [ref=e1509]: Suggest an edit or add missing content
            - generic [ref=e1510]:
              - link "Go to Learn more about contributing" [ref=e1511] [cursor=pointer]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                - text: Learn more about contributing
              - link "Go to Learn more about contributing" [ref=e1512] [cursor=pointer]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
            - link "Edit page" [ref=e1516] [cursor=pointer]:
              - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
              - generic [ref=e1519]: Edit page
        - heading "More to explore" [level=3] [ref=e1528]
  - generic [ref=e1533]:
    - heading "Recently viewed" [level=3] [ref=e1536]
    - generic [ref=e1538]: You have no recently viewed pages
  - contentinfo [ref=e1543]:
    - link "Sign in for more access" [ref=e1545] [cursor=pointer]:
      - /url: /registration/signin/?u=%2F&ref_=tt_ftr_reg
      - generic [ref=e1546]: Sign in for more access
    - generic [ref=e1547]:
      - generic [ref=e1548]:
        - generic [ref=e1549]:
          - generic [ref=e1550]: Follow IMDb on social
          - link "TikTok" [ref=e1551] [cursor=pointer]:
            - /url: https://www.tiktok.com/@imdb
          - link "Instagram" [ref=e1553] [cursor=pointer]:
            - /url: https://instagram.com/imdb
          - link "Twitter" [ref=e1556] [cursor=pointer]:
            - /url: https://twitter.com/imdb
          - link "YouTube" [ref=e1558] [cursor=pointer]:
            - /url: https://youtube.com/imdb/
          - link "Facebook" [ref=e1560] [cursor=pointer]:
            - /url: https://facebook.com/imdb
        - generic [ref=e1562]:
          - generic [ref=e1563]:
            - generic [ref=e1564]: Get the IMDb app
            - generic [ref=e1565]: For Android and iOS
          - group [ref=e1567]:
            - generic [ref=e1568]:
              - img "Get the IMDb app"
            - link "For Android and iOS" [ref=e1569] [cursor=pointer]:
              - /url: https://slyb.app.link/Aa96cLcBeAb
      - generic [ref=e1571]:
        - link "Help" [ref=e1572] [cursor=pointer]:
          - /url: https://help.imdb.com/imdb
          - text: Help
        - link "Site Index" [ref=e1574] [cursor=pointer]:
          - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
          - text: Site Index
        - link "IMDbPro" [ref=e1576] [cursor=pointer]:
          - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
          - text: IMDbPro
        - link "Box Office Mojo" [ref=e1578] [cursor=pointer]:
          - /url: https://www.boxofficemojo.com
          - text: Box Office Mojo
        - link "License IMDb Data" [ref=e1580] [cursor=pointer]:
          - /url: https://developer.imdb.com/
          - text: License IMDb Data
      - generic [ref=e1582]:
        - link "Press Room" [ref=e1583] [cursor=pointer]:
          - /url: /pressroom/?ref_=tt_ftr
        - link "Advertising" [ref=e1584] [cursor=pointer]:
          - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
          - text: Advertising
        - link "Jobs" [ref=e1586] [cursor=pointer]:
          - /url: https://www.amazon.jobs/en/teams/imdb
          - text: Jobs
        - link "Conditions of Use" [ref=e1588] [cursor=pointer]:
          - /url: /conditions/?ref_=tt_ftr
        - link "Privacy Policy" [ref=e1589] [cursor=pointer]:
          - /url: /privacy/?ref_=tt_ftr
        - generic [ref=e1590]:
          - link "Your Ads Privacy Choices" [ref=e1591] [cursor=pointer]:
            - /url: /privacy/redirect/?ref_=tt_ftr
            - img [ref=e1592]
          - link "Your Ads Privacy Choices" [ref=e1604] [cursor=pointer]:
            - /url: /privacy/redirect/?ref_=tt_ftr
    - img "IMDb, an Amazon company" [ref=e1606]
    - paragraph [ref=e1642]: © 1990-2026 by IMDb.com, Inc.
  - button "Back to top" [ref=e1643] [cursor=pointer]:
    - generic [ref=e1646]: Back to top
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
  23  |   
  24  |   // // 2
  25  |   // test('Showtimes section is available on page or redirect exists', async ({ page }) => {
  26  |   //   await page.goto('https://www.imdb.com/title/tt0111161/');
  27  | 
  28  |   //   const showtimesText = page.locator('text=/showtimes|tickets/i');
  29  | 
  30  |   //   const count = await showtimesText.count();
  31  | 
  32  |   //   expect(count).toBeGreaterThanOrEqual(0); 
  33  |   // });
  34  | 
  35  |   // // 3
  36  |   // test('Showtimes button is clickable', async ({ page }) => {
  37  |   //   const btn = page.getByRole('link', { name: /showtimes/i });
  38  | 
  39  |   //   if (await btn.count() > 0) {
  40  |   //     await btn.first().click();
  41  |   //   }
  42  |   // });
  43  | 
  44  | //   // 4
  45  | //   test('Navigation to showtimes page works', async ({ page }) => {
  46  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  47  | 
  48  | //     if (await btn.count() > 0) {
  49  | //       await btn.first().click();
  50  | //       await page.waitForLoadState('domcontentloaded');
  51  | 
  52  | //       await expect(page).toHaveURL(/showtimes|tickets|cinemas/);
  53  | //     }
  54  | //   });
  55  | 
  56  | //   // 5
  57  | //   test('Showtimes page content loads', async ({ page }) => {
  58  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  59  | 
  60  | //     if (await btn.count() > 0) {
  61  | //       await btn.first().click();
  62  | //       await expect(page.locator('body')).toBeVisible();
  63  | //     }
  64  | //   });
  65  | 
  66  | //   // 6
  67  | //   test('Location prompt appears or handled', async ({ page }) => {
  68  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  69  | 
  70  | //     if (await btn.count() > 0) {
  71  | //       await btn.first().click();
  72  | 
  73  | //       const location = page.locator('text=/location/i');
  74  | //       if (await location.count() > 0) {
  75  | //         await expect(location.first()).toBeVisible();
  76  | //       }
  77  | //     }
  78  | //   });
  79  | 
  80  | //   // 7
  81  | //   test('Cinema listings exist', async ({ page }) => {
  82  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  83  | 
  84  | //     if (await btn.count() > 0) {
  85  | //       await btn.first().click();
  86  | 
  87  | //       const cinemas = page.locator('text=/cinema|theatre|theater/i');
  88  | //       if (await cinemas.count() > 0) {
  89  | //         await expect(cinemas.first()).toBeVisible();
  90  | //       }
  91  | //     }
  92  | //   });
  93  | 
  94  | //   // 8
  95  | //   test('Showtimes are visible', async ({ page }) => {
  96  | //     const btn = page.getByRole('link', { name: /showtimes/i });
  97  | 
  98  | //     if (await btn.count() > 0) {
  99  | //       await btn.first().click();
  100 | 
  101 | //       const times = page.locator('text=/\\d{1,2}:\\d{2}/'); // 10:30, 14:00 format
  102 | //       if (await times.count() > 0) {
  103 | //         await expect(times.first()).toBeVisible();
  104 | //       }
  105 | //     }
  106 | //   });
  107 | 
  108 | //   // 9
  109 | //   test('Ticket links are visible', async ({ page }) => {
  110 | //     const btn = page.getByRole('link', { name: /showtimes/i });
  111 | 
  112 | //     if (await btn.count() > 0) {
  113 | //       await btn.first().click();
  114 | 
  115 | //       const links = page.locator('a[href*="ticket"], a[target="_blank"]');
  116 | //       await expect(links.first()).toBeVisible();
  117 | //     }
  118 | //   });
  119 | 
  120 | //   // 10
```