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
    - link "Home" [ref=e4]:
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
          - link "Cast & crew" [ref=e73]:
            - /url: /title/tt0111161/fullcredits/?ref_=tt_ov_ql_1
          - link "User reviews" [ref=e74]:
            - /url: /title/tt0111161/reviews/?ref_=tt_ov_ql_2
          - link "Trivia" [ref=e75]:
            - /url: /title/tt0111161/trivia/?ref_=tt_ov_ql_3
          - link "FAQ" [ref=e76]:
            - /url: /title/tt0111161/faq/?ref_=tt_ov_ql_4
          - link "IMDbPro" [ref=e78]:
            - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
          - button "View all topics" [ref=e79] [cursor=pointer]:
            - generic [ref=e81]: All topics
          - button "Share on social media" [ref=e83] [cursor=pointer]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - heading "The Shawshank Redemption" [level=1] [ref=e88]
            - link "1994" [ref=e89]:
              - /url: /title/tt0111161/releaseinfo/?ref_=tt_ov_rdat
            - link "R" [ref=e90]:
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
              - link "View ’The Shawshank Redemption’ Poster" [ref=e138]:
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
                - link "Frank Darabont" [ref=e190]:
                  - /url: /name/nm0001104/?ref_=tt_ov_1_1
                - generic [ref=e191]: Writers
                - generic [ref=e192]:
                  - link "Stephen King" [ref=e193]:
                    - /url: /name/nm0000175/?ref_=tt_ov_2_1
                  - link "Frank Darabont" [ref=e194]:
                    - /url: /name/nm0001104/?ref_=tt_ov_2_2
                - link "See full cast and crew" [ref=e195]:
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
                - link "Go to IMDbPro" [ref=e205]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_atf&ref_=cons_tt_atf
                  - img [ref=e206]
                - link "See production info at IMDbPro" [ref=e216]:
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
              - link "11.8K User reviews" [ref=e232]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ov_ururv
                - generic [ref=e233]:
                  - generic [ref=e234]: 11.8K
                  - generic [ref=e235]: User reviews
              - link "154 Critic reviews" [ref=e236]:
                - /url: /title/tt0111161/externalreviews/?ref_=tt_ov_crv
                - generic [ref=e237]:
                  - generic [ref=e238]: "154"
                  - generic [ref=e239]: Critic reviews
              - link "82 Metascore" [ref=e240]:
                - /url: /title/tt0111161/criticreviews/?ref_=tt_ov_msc
                - generic [ref=e241]:
                  - generic [ref=e243]: "82"
                  - generic [ref=e244]: Metascore
      - generic [ref=e246]:
        - generic [ref=e247]:
          - generic [ref=e249]:
            - 'link "Top rated movie #1" [ref=e251]':
              - /url: /chart/top/?ref_=tt_awd
            - link "See more awards and nominations" [ref=e252]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
              - text: Nominated for 7 Oscars
            - generic [ref=e253] [cursor=pointer]: 21 wins & 43 nominations total
            - link "See more awards and nominations" [ref=e254] [cursor=pointer]:
              - /url: /title/tt0111161/awards/?ref_=tt_awd
          - generic [ref=e261]:
            - link "Videos 6" [ref=e263]:
              - /url: /title/tt0111161/videogallery/?ref_=tt_vids_sm
              - heading "Videos 6" [level=3] [ref=e264]:
                - text: Videos
                - generic [ref=e265]: "6"
            - generic [ref=e268]:
              - group [ref=e269]:
                - group [ref=e270]:
                  - generic [ref=e271]:
                    - img "Official Trailer"
                  - link "TrailerOfficial Trailer" [ref=e272]:
                    - /url: /video/vi3877612057/?ref_=tt_vids_vi_1
                    - generic [ref=e277]: Trailer 2:11
                - link "TrailerOfficial Trailer" [ref=e280] [cursor=pointer]:
                  - /url: /video/vi3877612057/?ref_=tt_vids_vi_t_1
                  - generic [ref=e281]: Official Trailer
              - group [ref=e284]:
                - group [ref=e285]:
                  - generic [ref=e286]:
                    - img "Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films"
                  - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e287]:
                    - /url: /video/vi976077081/?ref_=tt_vids_vi_2
                    - generic [ref=e292]: Clip 8:43
                - link "ClipGuillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films" [ref=e295] [cursor=pointer]:
                  - /url: /video/vi976077081/?ref_=tt_vids_vi_t_2
                  - generic [ref=e296]: Guillermo del Toro and Neil Gaiman Find Hope in Powerful, Eclectic Films
            - group [ref=e300]:
              - generic [ref=e301]:
                - group [ref=e302]:
                  - group [ref=e303]:
                    - generic [ref=e304]:
                      - img "'The Shawshank Redemption' | Anniversary Mashup"
                    - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e305]:
                      - /url: /video/vi2425798425/?ref_=tt_vids_vi_3
                      - generic [ref=e310]: Clip 1:01
                  - link "Clip'The Shawshank Redemption' | Anniversary Mashup" [ref=e313] [cursor=pointer]:
                    - /url: /video/vi2425798425/?ref_=tt_vids_vi_t_3
                    - generic [ref=e314]: "'The Shawshank Redemption' | Anniversary Mashup"
                - group [ref=e317]:
                  - group [ref=e318]:
                    - generic [ref=e319]:
                      - img "What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson"
                    - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e320]:
                      - /url: /video/vi2910632473/?ref_=tt_vids_vi_4
                      - generic [ref=e325]: Video 1:55
                  - link "VideoWhat Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson" [ref=e328] [cursor=pointer]:
                    - /url: /video/vi2910632473/?ref_=tt_vids_vi_t_4
                    - generic [ref=e329]: What Jack From 'Titanic' Was Really Thinking, According to Phoebe Robinson
                - group [ref=e332]:
                  - group [ref=e333]:
                    - generic [ref=e334]:
                      - img "Who Else Almost Starred In 'The Shawshank Redemption?'"
                    - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e335]:
                      - /url: /video/vi2032974361/?ref_=tt_vids_vi_5
                      - generic [ref=e340]: Video 2:25
                  - link "VideoWho Else Almost Starred In 'The Shawshank Redemption?'" [ref=e343] [cursor=pointer]:
                    - /url: /video/vi2032974361/?ref_=tt_vids_vi_t_5
                    - generic [ref=e344]: Who Else Almost Starred In 'The Shawshank Redemption?'
                - group [ref=e347]:
                  - group [ref=e348]:
                    - generic [ref=e349]:
                      - img "Roles That Tom Cruise Turned Down"
                    - link "VideoRoles That Tom Cruise Turned Down" [ref=e350]:
                      - /url: /video/vi1874967321/?ref_=tt_vids_vi_6
                      - generic [ref=e355]: Video 2:22
                  - link "VideoRoles That Tom Cruise Turned Down" [ref=e358] [cursor=pointer]:
                    - /url: /video/vi1874967321/?ref_=tt_vids_vi_t_6
                    - generic [ref=e359]: Roles That Tom Cruise Turned Down
          - generic [ref=e362]:
            - generic [ref=e364]:
              - link "Photos 565" [ref=e365]:
                - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_sm
                - heading "Photos 565" [level=3] [ref=e366]:
                  - text: Photos
                  - generic [ref=e367]: "565"
              - button "Add photo" [ref=e370] [cursor=pointer]:
                - generic [ref=e372]: Add photo
            - generic [ref=e373]:
              - generic [ref=e374]:
                - link "View Poster" [ref=e375] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2971500544/?ref_=tt_ph_1
                  - img "View Poster" [ref=e377]
                - link "View Poster" [ref=e378] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm2954723328/?ref_=tt_ph_2
                  - img "View Poster" [ref=e380]
                - link "View Poster" [ref=e381] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3206381568/?ref_=tt_ph_3
                  - img "View Poster" [ref=e383]
              - generic [ref=e384]:
                - link "View Poster" [ref=e385] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3172827136/?ref_=tt_ph_1_1
                  - img "View Poster" [ref=e387]
                - link "View Poster" [ref=e388] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3156049920/?ref_=tt_ph_1_2
                  - img "View Poster" [ref=e390]
                - link "View Poster" [ref=e391] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3139272704/?ref_=tt_ph_1_3
                  - img "View Poster" [ref=e393]
                - link "+ 559 View Poster" [ref=e394] [cursor=pointer]:
                  - /url: /title/tt0111161/mediaviewer/rm3122495488/?ref_=tt_ph_more
                  - generic [ref=e395]: + 559
                  - img "View Poster" [ref=e397]
          - generic [ref=e398]:
            - generic [ref=e400]:
              - link "Top Cast 74" [ref=e401]:
                - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
                - heading "Top Cast 74" [level=3] [ref=e402]:
                  - generic [ref=e403]: Top Cast
                  - generic [ref=e404]: "74"
              - 'button "Top Cast: edit" [ref=e407] [cursor=pointer]':
                - generic [ref=e410]: Edit
            - group [ref=e411]:
              - generic [ref=e412]:
                - generic [ref=e413]:
                  - group [ref=e415]:
                    - generic [ref=e416]:
                      - img "Tim Robbins"
                    - button "Add Tim Robbins to favorite people" [ref=e417] [cursor=pointer]
                    - link "Go to Tim Robbins" [ref=e419]:
                      - /url: /name/nm0000209/?ref_=tt_cst_i_1
                  - generic [ref=e421]:
                    - link "Tim Robbins" [ref=e422]:
                      - /url: /name/nm0000209/?ref_=tt_cst_t_1
                    - link "Andy Dufresne" [ref=e424] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000209/?ref_=tt_cst_c_1
                - generic [ref=e425]:
                  - group [ref=e427]:
                    - generic [ref=e428]:
                      - img "Morgan Freeman"
                    - button "Add Morgan Freeman to favorite people" [ref=e429] [cursor=pointer]
                    - link "Go to Morgan Freeman" [ref=e431]:
                      - /url: /name/nm0000151/?ref_=tt_cst_i_2
                  - generic [ref=e433]:
                    - link "Morgan Freeman" [ref=e434]:
                      - /url: /name/nm0000151/?ref_=tt_cst_t_2
                    - link "Ellis Boyd 'Red' Redding" [ref=e436] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000151/?ref_=tt_cst_c_2
                - generic [ref=e437]:
                  - group [ref=e439]:
                    - generic [ref=e440]:
                      - img "Bob Gunton"
                    - button "Add Bob Gunton to favorite people" [ref=e441] [cursor=pointer]
                    - link "Go to Bob Gunton" [ref=e443]:
                      - /url: /name/nm0348409/?ref_=tt_cst_i_3
                  - generic [ref=e445]:
                    - link "Bob Gunton" [ref=e446]:
                      - /url: /name/nm0348409/?ref_=tt_cst_t_3
                    - link "Warden Norton" [ref=e448] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0348409/?ref_=tt_cst_c_3
                - generic [ref=e449]:
                  - group [ref=e451]:
                    - generic [ref=e452]:
                      - img "William Sadler"
                    - button "Add William Sadler to favorite people" [ref=e453] [cursor=pointer]
                    - link "Go to William Sadler" [ref=e455]:
                      - /url: /name/nm0006669/?ref_=tt_cst_i_4
                  - generic [ref=e457]:
                    - link "William Sadler" [ref=e458]:
                      - /url: /name/nm0006669/?ref_=tt_cst_t_4
                    - link "Heywood" [ref=e460] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0006669/?ref_=tt_cst_c_4
                - generic [ref=e461]:
                  - group [ref=e463]:
                    - generic [ref=e464]:
                      - img "Clancy Brown"
                    - button "Add Clancy Brown to favorite people" [ref=e465] [cursor=pointer]
                    - link "Go to Clancy Brown" [ref=e467]:
                      - /url: /name/nm0000317/?ref_=tt_cst_i_5
                  - generic [ref=e469]:
                    - link "Clancy Brown" [ref=e470]:
                      - /url: /name/nm0000317/?ref_=tt_cst_t_5
                    - link "Captain Hadley" [ref=e472] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0000317/?ref_=tt_cst_c_5
                - generic [ref=e473]:
                  - group [ref=e475]:
                    - generic [ref=e476]:
                      - img "Gil Bellows"
                    - button "Add Gil Bellows to favorite people" [ref=e477] [cursor=pointer]
                    - link "Go to Gil Bellows" [ref=e479]:
                      - /url: /name/nm0004743/?ref_=tt_cst_i_6
                  - generic [ref=e481]:
                    - link "Gil Bellows" [ref=e482]:
                      - /url: /name/nm0004743/?ref_=tt_cst_t_6
                    - link "Tommy" [ref=e484] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0004743/?ref_=tt_cst_c_6
                - generic [ref=e485]:
                  - group [ref=e487]:
                    - generic [ref=e488]:
                      - img "Mark Rolston"
                    - button "Add Mark Rolston to favorite people" [ref=e489] [cursor=pointer]
                    - link "Go to Mark Rolston" [ref=e491]:
                      - /url: /name/nm0001679/?ref_=tt_cst_i_7
                  - generic [ref=e493]:
                    - link "Mark Rolston" [ref=e494]:
                      - /url: /name/nm0001679/?ref_=tt_cst_t_7
                    - link "Bogs Diamond" [ref=e496] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0001679/?ref_=tt_cst_c_7
                - generic [ref=e497]:
                  - group [ref=e499]:
                    - generic [ref=e500]:
                      - img "James Whitmore"
                    - button "Add James Whitmore to favorite people" [ref=e501] [cursor=pointer]
                    - link "Go to James Whitmore" [ref=e503]:
                      - /url: /name/nm0926235/?ref_=tt_cst_i_8
                  - generic [ref=e505]:
                    - link "James Whitmore" [ref=e506]:
                      - /url: /name/nm0926235/?ref_=tt_cst_t_8
                    - link "Brooks Hatlen" [ref=e508] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0926235/?ref_=tt_cst_c_8
                - generic [ref=e509]:
                  - group [ref=e511]:
                    - generic [ref=e512]:
                      - img "Jeffrey DeMunn"
                    - button "Add Jeffrey DeMunn to favorite people" [ref=e513] [cursor=pointer]
                    - link "Go to Jeffrey DeMunn" [ref=e515]:
                      - /url: /name/nm0218810/?ref_=tt_cst_i_9
                  - generic [ref=e517]:
                    - link "Jeffrey DeMunn" [ref=e518]:
                      - /url: /name/nm0218810/?ref_=tt_cst_t_9
                    - link "1946 D.A." [ref=e520] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0218810/?ref_=tt_cst_c_9
                - generic [ref=e521]:
                  - group [ref=e523]:
                    - generic [ref=e524]:
                      - img "Larry Brandenburg"
                    - button "Add Larry Brandenburg to favorite people" [ref=e525] [cursor=pointer]
                    - link "Go to Larry Brandenburg" [ref=e527]:
                      - /url: /name/nm0104594/?ref_=tt_cst_i_10
                  - generic [ref=e529]:
                    - link "Larry Brandenburg" [ref=e530]:
                      - /url: /name/nm0104594/?ref_=tt_cst_t_10
                    - link "Skeet" [ref=e532] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0104594/?ref_=tt_cst_c_10
                - generic [ref=e533]:
                  - group [ref=e535]:
                    - generic [ref=e536]:
                      - img "Neil Giuntoli"
                    - button "Add Neil Giuntoli to favorite people" [ref=e537] [cursor=pointer]
                    - link "Go to Neil Giuntoli" [ref=e539]:
                      - /url: /name/nm0321358/?ref_=tt_cst_i_11
                  - generic [ref=e541]:
                    - link "Neil Giuntoli" [ref=e542]:
                      - /url: /name/nm0321358/?ref_=tt_cst_t_11
                    - link "Jigger" [ref=e544] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0321358/?ref_=tt_cst_c_11
                - generic [ref=e545]:
                  - group [ref=e547]:
                    - generic [ref=e548]:
                      - img "Brian Libby"
                    - button "Add Brian Libby to favorite people" [ref=e549] [cursor=pointer]
                    - link "Go to Brian Libby" [ref=e551]:
                      - /url: /name/nm0508742/?ref_=tt_cst_i_12
                  - generic [ref=e553]:
                    - link "Brian Libby" [ref=e554]:
                      - /url: /name/nm0508742/?ref_=tt_cst_t_12
                    - link "Floyd" [ref=e556] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0508742/?ref_=tt_cst_c_12
                - generic [ref=e557]:
                  - group [ref=e559]:
                    - generic [ref=e560]:
                      - img "David Proval"
                    - button "Add David Proval to favorite people" [ref=e561] [cursor=pointer]
                    - link "Go to David Proval" [ref=e563]:
                      - /url: /name/nm0698998/?ref_=tt_cst_i_13
                  - generic [ref=e565]:
                    - link "David Proval" [ref=e566]:
                      - /url: /name/nm0698998/?ref_=tt_cst_t_13
                    - link "Snooze" [ref=e568] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0698998/?ref_=tt_cst_c_13
                - generic [ref=e569]:
                  - group [ref=e571]:
                    - generic [ref=e572]:
                      - img "Joseph Ragno"
                    - button "Add Joseph Ragno to favorite people" [ref=e573] [cursor=pointer]
                    - link "Go to Joseph Ragno" [ref=e575]:
                      - /url: /name/nm0706554/?ref_=tt_cst_i_14
                  - generic [ref=e577]:
                    - link "Joseph Ragno" [ref=e578]:
                      - /url: /name/nm0706554/?ref_=tt_cst_t_14
                    - link "Ernie" [ref=e580] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0706554/?ref_=tt_cst_c_14
                - generic [ref=e581]:
                  - group [ref=e583]:
                    - generic [ref=e584]:
                      - img "Jude Ciccolella"
                    - button "Add Jude Ciccolella to favorite people" [ref=e585] [cursor=pointer]
                    - link "Go to Jude Ciccolella" [ref=e587]:
                      - /url: /name/nm0161980/?ref_=tt_cst_i_15
                  - generic [ref=e589]:
                    - link "Jude Ciccolella" [ref=e590]:
                      - /url: /name/nm0161980/?ref_=tt_cst_t_15
                    - link "Guard Mert" [ref=e592] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0161980/?ref_=tt_cst_c_15
                - generic [ref=e593]:
                  - group [ref=e595]:
                    - generic [ref=e596]:
                      - img "Paul McCrane"
                    - button "Add Paul McCrane to favorite people" [ref=e597] [cursor=pointer]
                    - link "Go to Paul McCrane" [ref=e599]:
                      - /url: /name/nm0005204/?ref_=tt_cst_i_16
                  - generic [ref=e601]:
                    - link "Paul McCrane" [ref=e602]:
                      - /url: /name/nm0005204/?ref_=tt_cst_t_16
                    - link "Guard Trout" [ref=e604] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0005204/?ref_=tt_cst_c_16
                - generic [ref=e605]:
                  - group [ref=e607]:
                    - img [ref=e609]
                    - button "Add Renee Blaine to favorite people" [ref=e611] [cursor=pointer]
                    - link "Go to Renee Blaine" [ref=e613]:
                      - /url: /name/nm0086169/?ref_=tt_cst_i_17
                  - generic [ref=e615]:
                    - link "Renee Blaine" [ref=e616]:
                      - /url: /name/nm0086169/?ref_=tt_cst_t_17
                    - link "Andy Dufresne's Wife" [ref=e618] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0086169/?ref_=tt_cst_c_17
                - generic [ref=e619]:
                  - group [ref=e621]:
                    - img [ref=e623]
                    - button "Add Scott Mann to favorite people" [ref=e625] [cursor=pointer]
                    - link "Go to Scott Mann" [ref=e627]:
                      - /url: /name/nm0542957/?ref_=tt_cst_i_18
                  - generic [ref=e629]:
                    - link "Scott Mann" [ref=e630]:
                      - /url: /name/nm0542957/?ref_=tt_cst_t_18
                    - link "Glenn Quentin" [ref=e632] [cursor=pointer]:
                      - /url: /title/tt0111161/characters/nm0542957/?ref_=tt_cst_c_18
            - generic [ref=e633]: Director
            - link "Frank Darabont" [ref=e635]:
              - /url: /name/nm0001104/?ref_=tt_cst_1_1
            - generic [ref=e636]: Writers
            - generic [ref=e637]:
              - link "Stephen King" [ref=e638]:
                - /url: /name/nm0000175/?ref_=tt_cst_2_1
              - link "Frank Darabont" [ref=e639]:
                - /url: /name/nm0001104/?ref_=tt_cst_2_2
            - link "See full cast and crew" [ref=e640]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
              - text: All cast & crew
            - link "See full cast and crew" [ref=e641] [cursor=pointer]:
              - /url: /title/tt0111161/fullcredits/?ref_=tt_cst_sm
            - link "Production, box office & more at IMDbPro" [ref=e644]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - link "Production, box office & more at IMDbPro" [ref=e645] [cursor=pointer]:
              - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
          - generic [ref=e647]:
            - generic [ref=e649]:
              - link "User reviews 11.8K" [ref=e650]:
                - /url: /title/tt0111161/reviews/?ref_=tt_ururv_sm
                - heading "User reviews 11.8K" [level=3] [ref=e651]:
                  - generic [ref=e652]: User reviews
                  - generic [ref=e653]: 11.8K
              - button "Review" [ref=e656] [cursor=pointer]:
                - generic [ref=e658]: Review
            - generic [ref=e659]:
              - generic [ref=e660]:
                - generic [ref=e663]: "9.3"
                - generic [ref=e664]: 3192.1K
              - generic [ref=e666]:
                - link "44007 1-star reviews. Select to read them." [ref=e667] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=1&ref_=tt_ururv_histo_1
                  - generic [ref=e671]: "1"
                - link "5668 2-star reviews. Select to read them." [ref=e672] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=2&ref_=tt_ururv_histo_2
                  - generic [ref=e676]: "2"
                - link "6154 3-star reviews. Select to read them." [ref=e677] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=3&ref_=tt_ururv_histo_3
                  - generic [ref=e681]: "3"
                - link "8402 4-star reviews. Select to read them." [ref=e682] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=4&ref_=tt_ururv_histo_4
                  - generic [ref=e686]: "4"
                - link "17864 5-star reviews. Select to read them." [ref=e687] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=5&ref_=tt_ururv_histo_5
                  - generic [ref=e691]: "5"
                - link "35018 6-star reviews. Select to read them." [ref=e692] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=6&ref_=tt_ururv_histo_6
                  - generic [ref=e696]: "6"
                - link "118403 7-star reviews. Select to read them." [ref=e697] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=7&ref_=tt_ururv_histo_7
                  - generic [ref=e701]: "7"
                - link "376585 8-star reviews. Select to read them." [ref=e702] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=8&ref_=tt_ururv_histo_8
                  - generic [ref=e706]: "8"
                - link "827405 9-star reviews. Select to read them." [ref=e707] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=9&ref_=tt_ururv_histo_9
                  - generic [ref=e711]: "9"
                - link "1752635 10-star reviews. Select to read them." [ref=e712] [cursor=pointer]:
                  - /url: /title/tt0111161/reviews/?rating=10&ref_=tt_ururv_histo_10
                  - generic [ref=e716]: "10"
            - heading "Featured reviews" [level=3] [ref=e719]
            - group [ref=e720]:
              - generic [ref=e721]:
                - generic [ref=e722] [cursor=pointer]:
                  - generic [ref=e723]:
                    - link "User Coxer99" [ref=e725]:
                      - /url: /user/p.xgoctsrtgcc25qawmehvzavskq/?ref_=tt_ururv_c_1_uname
                      - generic [ref=e726]:
                        - group [ref=e727]:
                          - generic [ref=e728]:
                            - img [ref=e730]
                            - img "Placeholder profile image" [ref=e732]
                        - generic [ref=e736]: Coxer99
                    - generic "Author rating is 10" [ref=e737]:
                      - generic [ref=e739]: "10"
                  - link "The Shawshank Redemption" [ref=e741]:
                    - /url: /title/tt0111161/reviews/?featured=rw0348222&ref_=tt_ururv_c_1_hd
                    - heading "The Shawshank Redemption" [level=3] [ref=e742]
                  - text: One of the finest films made in recent years. It's a poignant story about hope. Hope gets me. That's what makes a film like this more than a movie. It tells a lesson about life. Those are the films people talk about 50 or even 100 years from you. It's also a story for freedom. Freedom from isolation, from rule, from bigotry and hate. Freeman and Robbins are majestic in their performances. Each learns from the other. Their relationship is strong and you feel that from the first moment they make contact with one another. There is also a wonderful performance from legend James Whitmore as Brooks.
                  - text: He shines when it is his time to go back into the world, only to find that the world grew up so fast he never even got a chance to blink. Stephen King's story is brought to the screen with great elegance and excitement. It is an extraordinary motion that people "will" be talking about in 50 or 100 years.
                - generic [ref=e743] [cursor=pointer]:
                  - generic [ref=e744]:
                    - link "User weswalker" [ref=e746]:
                      - /url: /user/p.lfg4l6vl7cel6c3aaj5a37t3pu/?ref_=tt_ururv_c_2_uname
                      - generic [ref=e747]:
                        - group [ref=e748]:
                          - generic [ref=e749]:
                            - img [ref=e751]
                            - img "Placeholder profile image" [ref=e753]
                        - generic [ref=e757]: weswalker
                    - generic "Author rating is 10" [ref=e758]:
                      - generic [ref=e760]: "10"
                  - link "Shawshank Redeems Hollywood" [ref=e762]:
                    - /url: /title/tt0111161/reviews/?featured=rw0349147&ref_=tt_ururv_c_2_hd
                    - heading "Shawshank Redeems Hollywood" [level=3] [ref=e763]
                  - text: Can Hollywood, usually creating things for entertainment purposes only, create art? To create something of this nature, a director must approach it in a most meticulous manner, due to the delicacy of the process. Such a daunting task requires an extremely capable artist with an undeniable managerial capacity and an acutely developed awareness of each element of art in their films, the most prominent; music, visuals, script, and acting. These elements, each equally important, must succeed independently, yet still form a harmonious union, because this mixture determines the fate of the artist's opus. Though already well known amongst his colleagues for his notable skills at writing and directing, Frank Darabont emerges with his feature film directorial debut, The Shawshank Redemption. Proving himself already a master of the craft, Darabont managed to create one of the most recognizable independent releases in the history of Hollywood. The Shawshank Redemption defines a genre, defies the odds, compels the emotions, and brings an era of artistically influential films back to Hollywood.
                  - text: The story begins with the trial of a young banker, Andy Dufrense, victimized by circumstantial evidence, resulting in a conviction for the murder of his wife and her lover. After a quick conviction, Andy finds himself serving a life sentence at Shawshank prison, with no hope of parole. He exists in this prison only in appearance, keeping his mind free from the drab walls around him. His ability to do this results in the gaining of respect from his fellow inmates, but most of all from Ellis Redding. Ellis, commonly referred to as Red, finds gainful use of his entrepreneurial spirit within the drab walls of Shawshank by dealing in contraband and commodities rare to the confines of prison. Andy's demeanor and undeniable sense of hope causes Red to take a deeper look at himself, and the world around him. Andy proves to Red and the other inmates that in the conventional walls of Shawshank prison convention will find no home in his lifestyle.
                  - text: By creating the film's firm foundation, the meticulously chiseled screenplay paved the way for this film's success. Frank Darabont outdoes himself with the phenomenal adaptation of Stephen King's equally noteworthy novella, Rita Hayworth and Shawshank Redemption. In this novella, King demonstrates that he can break free from the genre he dominates and still create a marvelous piece of modern literature. Though the film mirrors the novella in many ways, Darabont illustrates a focused objective of improving upon the areas where the novella came up short, resulting in one of the best book to film transitions ever.
                  - text: While maintaining some of the poetic and moving dialogue of the novella, Darabont also proves that a film's score can generate a great deal of emotional response from its audience, as dialogue does. He employs the cunning Thomas Newman, son of the legendary Hollywood composer, Alfred Newman. Darabont shows recognition for the film's needs by employing Newman, who makes the gentle piano chords whisper softly to the viewer, as if a part of the scripted dialogue. Newman lends himself to individualism and tends to drive more towards the unique in the realm of score composition. His effort in Shawshank did not go unnoticed, as his score received an Oscar nomination in 1995. While unique and independent, Newman's score never once intrudes on your concentration or distracts from the film.
                  - text: With work from vast array of talented scene designers, costume designers, composers, cinematographers, and various other Hollywood artists, the cast of The Shawshank Redemption had a strong foundation to work with. The marvelous cast of this film will dazzle you with some of the most convincing performances you will witness in a film. While both Tim Robbins and Morgan Freeman shine as Andy and Red, respectively, the true spectacle of acting lies within the plethora of amazing supporting actors who easily disappear into their roles. Most noticeable of these, the veteran film star James Whitmore, who portrays the elderly Brooks Hatlen. Brooks, a man incarcerated for an unmentioned crime for so long that he finds himself attached to the Shawshank and the daily life he has lead. Each of these actors show a true dedication to their art, and a focused purpose in their motivations, creating a convincing setting that never once caters to anything unbelievable.
                  - text: With all of the aesthetic touches and attention to cinematic detail, the most beautiful part of the film lies within its thematic material, such as its focus on the human desires for the most abstract concepts, like hope and freedom. These themes, which concern things the human spirit undoubtedly yearns for, seem so intricately woven into the plot that it easily draws its audience in to its story. Though full of hardened criminals, your heart will go out to these men as they display the most basic of human emotions, and deliver some of the most quotable lines in a film to date. Like a great novel, this film manages to succeed at greater things than simply entertaining an audience. Darabont tells his story most masterfully, illustrating principles and inspiring his audience to think. He leaves us a poignant film with a powerful message of hope, and redemption, something we all seek.
                  - text: This film manages to redeem Hollywood in the eyes of people who feared it long lost in a dark sea of clichés and predictability. Darabont shows us that artists still work in the Hollywood studios and production facilities. These artists show their capability to produce art; real art that inspires you to look at the deeper aspects of life and the world around you. The Shawshank Redemption delivers much-needed breath of fresh air for anyone who realizes the capability of film. It proves that masters of the craft still live on this earth, and still bless us with timeless masterpieces that we will never forget.
                - generic [ref=e764] [cursor=pointer]:
                  - generic [ref=e765]:
                    - link "User nowego" [ref=e767]:
                      - /url: /user/p.ncve4xodxwur6wfxnfgnuwgsxy/?ref_=tt_ururv_c_3_uname
                      - generic [ref=e768]:
                        - group [ref=e769]:
                          - generic [ref=e771]:
                            - img "Avatar"
                        - generic [ref=e774]: nowego
                    - generic "Author rating is 10" [ref=e775]:
                      - generic [ref=e777]: "10"
                  - link "Eternal Hope" [ref=e779]:
                    - /url: /title/tt0111161/reviews/?featured=rw4203332&ref_=tt_ururv_c_3_hd
                    - heading "Eternal Hope" [level=3] [ref=e780]
                  - text: I've lost count of the number of times I have seen this movie, but it is more than 20. It has to be one of the best movies ever made. It made me take notice Morgan Freeman and Tim Robbins like I had never noticed any actors before.
                  - text: I have from a very young age been a huge fan of anything Stephen King writes and had already read the short story that this movie is based on years prior to seeing this movie.
                  - text: Not everything Stephen King has written that gets turned into a movie comes out well, but this is as close to perfection as it gets and has everything you could ever want in a movie.
                  - text: Something that is outstanding is the fact that it has no real action, no special effects and no gimmicks. 99% of the movie is just men in a prison uniforms talking. Yet it absolutely hooks you almost from the beginning and has you glued to the screen to the end.
                  - text: For me what really makes this film one of the best is the message of eternal hope it conveys throughout. The never ever give up hope attitude of the main character so well conveyed by Tim Robbins. The ending is just spine tingling every time I see it, no matter how many times I have seen it.
                  - text: Brilliant, brilliant movie and a must see for everyone.
                - generic [ref=e781] [cursor=pointer]:
                  - generic [ref=e782]:
                    - link "User alexkolokotronis" [ref=e784]:
                      - /url: /user/p.2vibpa6e4h2oc5snny6pkkmzb4/?ref_=tt_ururv_c_4_uname
                      - generic [ref=e785]:
                        - group [ref=e786]:
                          - generic [ref=e787]:
                            - img [ref=e789]
                            - img "Placeholder profile image" [ref=e791]
                        - generic [ref=e795]: alexkolokotronis
                    - generic "Author rating is 10" [ref=e796]:
                      - generic [ref=e798]: "10"
                  - link "This is How Movies Should Be Made" [ref=e800]:
                    - /url: /title/tt0111161/reviews/?featured=rw1822343&ref_=tt_ururv_c_4_hd
                    - heading "This is How Movies Should Be Made" [level=3] [ref=e801]
                  - text: This movie is not your ordinary Hollywood flick. It has a great and deep message. This movie has a foundation and just kept on being built on from their and that foundation is hope.
                  - text: Other than just the message of this movie the acting was phenomenal. Tim Robbins gave one of the greatest performances ever. He was inspiring, intelligent and most of all positive. His performance just made me smile. Robbins plays Andy Dufresne who was wrongfully convicted of murdering his wife and her lover. He is gets to life sentences but yet never gives up hope. In he becomes friends with Ellis Boyd "Red" Redding played by Morgan Freeman. Freeman who gives the finest performance of his career has unlike Robbins lost hope. He is in deep regret of the crime that he committed. His way of deflecting the pain away is by trying to not feel anything at all. With his friendship with Andy he learns that without our hopes and dreams we have nothing. Andy also becomes friends with the rest of Red's group. James Whitmore also gave a great performance as Brooks Halten who gets out of prison parole but in the words of Red he has been "institutionalized".
                  - text: The directing by Frank Darabont was just magnificent. He kept this movie at a great steady pace along with the writing and great cinematography. He portrayed prison life in such a horrifying way, but not in terms of the physical pain but the stress and pain that wares mentally on the inmates, some of which deserve a second chance.
                  - text: Whatever you do, don't listen to the people who say this movie is overrated because this is one of the most inspiring and greatest movies ever. It has everything you could possibly want.
                - generic [ref=e802] [cursor=pointer]:
                  - generic [ref=e803]:
                    - link "User Sleepin_Dragon" [ref=e805]:
                      - /url: /user/p.nadoqibapcutzfhtliuzriogla/?ref_=tt_ururv_c_5_uname
                      - generic [ref=e806]:
                        - group [ref=e807]:
                          - generic [ref=e809]:
                            - img "Avatar"
                        - generic [ref=e812]: Sleepin_Dragon
                    - generic "Author rating is 10" [ref=e813]:
                      - generic [ref=e815]: "10"
                  - link "An incredible movie. One that lives with you." [ref=e817]:
                    - /url: /title/tt0111161/reviews/?featured=rw6606154&ref_=tt_ururv_c_5_hd
                    - heading "An incredible movie. One that lives with you." [level=3] [ref=e818]
                  - text: It is no wonder that the film has such a high rating, it is quite literally breathtaking. What can I say that hasn't said before? Not much, it's the story, the acting, the premise, but most of all, this movie is about how it makes you feel. Sometimes you watch a film, and can't remember it days later, this film loves with you, once you've seen it, you don't forget.
                  - text: The ultimate story of friendship, of hope, and of life, and overcoming adversity.
                  - text: I understand why so many class this as the best film of all time, it isn't mine, but I get it. If you haven't seen it, or haven't seen it for some time, you need to watch it, it's amazing. 10/10.
          - generic [ref=e821]:
            - generic [ref=e822]:
              - heading "'The Shawshank Redemption' Without Morgan Freeman?" [level=2] [ref=e823]
              - emphasis [ref=e824]:
                - link "The Shawshank Redemption" [ref=e825]:
                  - /url: /title/tt0111161/?ref_=tt_eds_center-3_lk
              - text: has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?
              - link "Who almost starred?" [ref=e826]:
                - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_c_vd_cc_shs_cta
            - group [ref=e828]:
              - group [ref=e829]:
                - generic [ref=e830]:
                  - img "Editorial Image"
                - link "2:25" [ref=e831]:
                  - /url: /list/ls025720609/videoplayer/vi2032974361?ref_=tt_vd_cc_shs_i
                  - generic [ref=e836]: 2:25
          - generic [ref=e839]:
            - generic [ref=e841]:
              - heading "More like this" [level=3] [ref=e843]:
                - generic [ref=e844]: More like this
              - link "More information" [ref=e846] [cursor=pointer]:
                - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
            - group [ref=e849]:
              - generic [ref=e850]:
                - group [ref=e851]:
                  - group [ref=e852]:
                    - generic [ref=e853]:
                      - img "The Godfather"
                    - button "Add to Watchlist" [ref=e854] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e859]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_i_1
                  - generic [ref=e861]:
                    - generic [ref=e864]: "9.2"
                    - button "Rate The Godfather" [ref=e865] [cursor=pointer]
                  - link "View title page for The Godfather" [ref=e868] [cursor=pointer]:
                    - /url: /title/tt0068646/?ref_=tt_mlt_t_1
                    - text: The Godfather
                  - button "More about this" [ref=e873] [cursor=pointer]
                - group [ref=e876]:
                  - group [ref=e877]:
                    - generic [ref=e878]:
                      - img "The Dark Knight"
                    - button "Add to Watchlist" [ref=e879] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e884]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_i_2
                  - generic [ref=e886]:
                    - generic [ref=e889]: "9.1"
                    - button "Rate The Dark Knight" [ref=e890] [cursor=pointer]
                  - link "View title page for The Dark Knight" [ref=e893] [cursor=pointer]:
                    - /url: /title/tt0468569/?ref_=tt_mlt_t_2
                    - text: The Dark Knight
                  - button "More about this" [ref=e898] [cursor=pointer]
                - group [ref=e901]:
                  - group [ref=e902]:
                    - generic [ref=e903]:
                      - img "Forrest Gump"
                    - button "Add to Watchlist" [ref=e904] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e909]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_i_3
                  - generic [ref=e911]:
                    - generic [ref=e914]: "8.8"
                    - button "Rate Forrest Gump" [ref=e915] [cursor=pointer]
                  - link "View title page for Forrest Gump" [ref=e918] [cursor=pointer]:
                    - /url: /title/tt0109830/?ref_=tt_mlt_t_3
                    - text: Forrest Gump
                  - button "More about this" [ref=e923] [cursor=pointer]
                - group [ref=e926]:
                  - group [ref=e927]:
                    - generic [ref=e928]:
                      - img "Fight Club"
                    - button "Add to Watchlist" [ref=e929] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e934]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_i_4
                  - generic [ref=e936]:
                    - generic [ref=e939]: "8.8"
                    - button "Rate Fight Club" [ref=e940] [cursor=pointer]
                  - link "View title page for Fight Club" [ref=e943] [cursor=pointer]:
                    - /url: /title/tt0137523/?ref_=tt_mlt_t_4
                    - text: Fight Club
                  - button "More about this" [ref=e948] [cursor=pointer]
                - group [ref=e951]:
                  - group [ref=e952]:
                    - generic [ref=e953]:
                      - img "Pulp Fiction"
                    - button "Add to Watchlist" [ref=e954] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e959]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_i_5
                  - generic [ref=e961]:
                    - generic [ref=e964]: "8.8"
                    - button "Rate Pulp Fiction" [ref=e965] [cursor=pointer]
                  - link "View title page for Pulp Fiction" [ref=e968] [cursor=pointer]:
                    - /url: /title/tt0110912/?ref_=tt_mlt_t_5
                    - text: Pulp Fiction
                  - button "More about this" [ref=e973] [cursor=pointer]
                - group [ref=e976]:
                  - group [ref=e977]:
                    - generic [ref=e978]:
                      - img "Interstellar"
                    - button "Add to Watchlist" [ref=e979] [cursor=pointer]
                    - link "View title page for Interstellar" [ref=e984]:
                      - /url: /title/tt0816692/?ref_=tt_mlt_i_6
                  - generic [ref=e986]:
                    - generic [ref=e989]: "8.7"
                    - button "Rate Interstellar" [ref=e990] [cursor=pointer]
                  - link "View title page for Interstellar" [ref=e993] [cursor=pointer]:
                    - /url: /title/tt0816692/?ref_=tt_mlt_t_6
                    - text: Interstellar
                  - button "More about this" [ref=e998] [cursor=pointer]
                - group [ref=e1001]:
                  - group [ref=e1002]:
                    - generic [ref=e1003]:
                      - img "Seven"
                    - button "Add to Watchlist" [ref=e1004] [cursor=pointer]
                    - link "View title page for Seven" [ref=e1009]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_i_7
                  - generic [ref=e1011]:
                    - generic [ref=e1014]: "8.6"
                    - button "Rate Seven" [ref=e1015] [cursor=pointer]
                  - link "View title page for Seven" [ref=e1018] [cursor=pointer]:
                    - /url: /title/tt0114369/?ref_=tt_mlt_t_7
                    - text: Seven
                  - button "More about this" [ref=e1023] [cursor=pointer]
                - group [ref=e1026]:
                  - group [ref=e1027]:
                    - generic [ref=e1028]:
                      - img "Inception"
                    - button "Add to Watchlist" [ref=e1029] [cursor=pointer]
                    - link "View title page for Inception" [ref=e1034]:
                      - /url: /title/tt1375666/?ref_=tt_mlt_i_8
                  - generic [ref=e1036]:
                    - generic [ref=e1039]: "8.8"
                    - button "Rate Inception" [ref=e1040] [cursor=pointer]
                  - link "View title page for Inception" [ref=e1043] [cursor=pointer]:
                    - /url: /title/tt1375666/?ref_=tt_mlt_t_8
                    - text: Inception
                  - button "More about this" [ref=e1048] [cursor=pointer]
                - group [ref=e1051]:
                  - group [ref=e1052]:
                    - generic [ref=e1053]:
                      - img "The Green Mile"
                    - button "Add to Watchlist" [ref=e1054] [cursor=pointer]
                    - link "View title page for The Green Mile" [ref=e1059]:
                      - /url: /title/tt0120689/?ref_=tt_mlt_i_9
                  - generic [ref=e1061]:
                    - generic [ref=e1064]: "8.6"
                    - button "Rate The Green Mile" [ref=e1065] [cursor=pointer]
                  - link "View title page for The Green Mile" [ref=e1068] [cursor=pointer]:
                    - /url: /title/tt0120689/?ref_=tt_mlt_t_9
                    - text: The Green Mile
                  - button "More about this" [ref=e1073] [cursor=pointer]
                - group [ref=e1076]:
                  - group [ref=e1077]:
                    - generic [ref=e1078]:
                      - img "Schindler's List"
                    - button "Add to Watchlist" [ref=e1079] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e1084]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_i_10
                  - generic [ref=e1086]:
                    - generic [ref=e1089]: "9.0"
                    - button "Rate Schindler's List" [ref=e1090] [cursor=pointer]
                  - link "View title page for Schindler's List" [ref=e1093] [cursor=pointer]:
                    - /url: /title/tt0108052/?ref_=tt_mlt_t_10
                    - text: Schindler's List
                  - button "More about this" [ref=e1098] [cursor=pointer]
                - group [ref=e1101]:
                  - group [ref=e1102]:
                    - generic [ref=e1103]:
                      - img "The Godfather Part II"
                    - button "Add to Watchlist" [ref=e1104] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e1109]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_i_11
                  - generic [ref=e1111]:
                    - generic [ref=e1114]: "9.0"
                    - button "Rate The Godfather Part II" [ref=e1115] [cursor=pointer]
                  - link "View title page for The Godfather Part II" [ref=e1118] [cursor=pointer]:
                    - /url: /title/tt0071562/?ref_=tt_mlt_t_11
                    - text: The Godfather Part II
                  - button "More about this" [ref=e1123] [cursor=pointer]
                - group [ref=e1126]:
                  - group [ref=e1127]:
                    - generic [ref=e1128]:
                      - img "Saving Private Ryan"
                    - button "Add to Watchlist" [ref=e1129] [cursor=pointer]
                    - link "View title page for Saving Private Ryan" [ref=e1134]:
                      - /url: /title/tt0120815/?ref_=tt_mlt_i_12
                  - generic [ref=e1136]:
                    - generic [ref=e1139]: "8.6"
                    - button "Rate Saving Private Ryan" [ref=e1140] [cursor=pointer]
                  - link "View title page for Saving Private Ryan" [ref=e1143] [cursor=pointer]:
                    - /url: /title/tt0120815/?ref_=tt_mlt_t_12
                    - text: Saving Private Ryan
                  - button "More about this" [ref=e1148] [cursor=pointer]
          - generic [ref=e1151]:
            - link "Related interests" [ref=e1153]:
              - /url: /interest/all/?ref_=tt_rin_sm
              - heading "Related interests" [level=3] [ref=e1154]:
                - generic [ref=e1155]: Related interests
            - group [ref=e1157]:
              - generic [ref=e1158]:
                - generic [ref=e1159]:
                  - group [ref=e1160]:
                    - generic [ref=e1161]:
                      - img "Orson Welles in Citizen Kane (1941)"
                    - button "Add Epic to your interests" [ref=e1162] [cursor=pointer]
                    - link "Epic" [ref=e1164]:
                      - /url: /interest/in0000077/?ref_=tt_rin_in_i_1
                  - link "Epic" [ref=e1166] [cursor=pointer]:
                    - /url: /interest/in0000077/?ref_=tt_rin_in_t_1
                    - generic [ref=e1167]: Epic
                - generic [ref=e1168]:
                  - group [ref=e1169]:
                    - generic [ref=e1170]:
                      - img "Emma Watson, Saoirse Ronan, Florence Pugh, and Eliza Scanlen in Little Women (2019)"
                    - button "Add Period Drama to your interests" [ref=e1171] [cursor=pointer]
                    - link "Period Drama" [ref=e1173]:
                      - /url: /interest/in0000083/?ref_=tt_rin_in_i_2
                  - link "Period Drama" [ref=e1175] [cursor=pointer]:
                    - /url: /interest/in0000083/?ref_=tt_rin_in_t_2
                    - generic [ref=e1176]: Period Drama
                - generic [ref=e1177]:
                  - group [ref=e1178]:
                    - generic [ref=e1179]:
                      - img "Morgan Freeman and Tim Robbins in The Shawshank Redemption (1994)"
                    - button "Add Prison Drama to your interests" [ref=e1180] [cursor=pointer]
                    - link "Prison Drama" [ref=e1182]:
                      - /url: /interest/in0000085/?ref_=tt_rin_in_i_3
                  - link "Prison Drama" [ref=e1184] [cursor=pointer]:
                    - /url: /interest/in0000085/?ref_=tt_rin_in_t_3
                    - generic [ref=e1185]: Prison Drama
                - generic [ref=e1186]:
                  - group [ref=e1187]:
                    - generic [ref=e1188]:
                      - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                    - button "Add Psychological Drama to your interests" [ref=e1189] [cursor=pointer]
                    - link "Psychological Drama" [ref=e1191]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_i_4
                  - link "Psychological Drama" [ref=e1193] [cursor=pointer]:
                    - /url: /interest/in0000086/?ref_=tt_rin_in_t_4
                    - generic [ref=e1194]: Psychological Drama
                - generic [ref=e1195]:
                  - group [ref=e1196]:
                    - generic [ref=e1197]:
                      - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                    - button "Add Drama to your interests" [ref=e1198] [cursor=pointer]
                    - link "Drama" [ref=e1200]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_i_5
                  - link "Drama" [ref=e1202] [cursor=pointer]:
                    - /url: /interest/in0000076/?ref_=tt_rin_in_t_5
                    - generic [ref=e1203]: Drama
          - generic [ref=e1206]:
            - link "Storyline" [ref=e1207]:
              - /url: "#storyline"
              - heading "Storyline" [level=3] [ref=e1208]:
                - generic [ref=e1209]: Storyline
            - 'button "Storyline: edit" [ref=e1213] [cursor=pointer]':
              - generic [ref=e1216]: Edit
          - generic [ref=e1218]:
            - generic [ref=e1220]:
              - heading "Did you know" [level=3] [ref=e1222]:
                - generic [ref=e1223]: Did you know
              - 'button "Did you know: edit" [ref=e1225] [cursor=pointer]':
                - generic [ref=e1228]: Edit
            - generic [ref=e1229]:
              - link "See more" [ref=e1230]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
                - text: Trivia
              - generic [ref=e1232] [cursor=pointer]:
                - button "See more" [ref=e1233]
                - generic [ref=e1238]:
                  - text: Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director
                  - link "Frank Darabont" [ref=e1239]:
                    - /url: /name/nm0001104/?ref_=dyk_trv
                  - text: insisted on many takes of the scene before he was satisfied.
                  - link "Morgan Freeman" [ref=e1240]:
                    - /url: /name/nm0000151/?ref_=dyk_trv
                  - text: threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.
              - link "See more" [ref=e1241] [cursor=pointer]:
                - /url: /title/tt0111161/trivia/?ref_=tt_dyk_trv
            - generic [ref=e1244]:
              - link "See more" [ref=e1245]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
                - text: Goofs
              - generic [ref=e1247] [cursor=pointer]:
                - button "See more" [ref=e1248]
                - generic [ref=e1253]:
                  - text: Circa 1963, Heywood is shown listening to the record "24 of
                  - link "Hank Williams" [ref=e1254]:
                    - /url: /name/nm0930729/?ref_=dyk_gf
                  - text: "' Greatest Hits\", released in 1970."
              - link "See more" [ref=e1255] [cursor=pointer]:
                - /url: /title/tt0111161/goofs/?tab=gf&ref_=tt_dyk_gf
            - generic [ref=e1258]:
              - link "See more" [ref=e1259]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
                - text: Quotes
              - generic [ref=e1261] [cursor=pointer]:
                - button "See more" [ref=e1262]
                - list [ref=e1267]:
                  - listitem [ref=e1268]:
                    - link "Andy Dufresne" [ref=e1269]:
                      - /url: /name/nm0000209/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1270]: to Red
                    - text: "] I guess it comes down to a simple choice, really. Get busy living, or get busy dying."
              - link "See more" [ref=e1271] [cursor=pointer]:
                - /url: /title/tt0111161/quotes/?ref_=tt_dyk_qu
            - generic [ref=e1274]:
              - link "See more" [ref=e1275]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
                - text: Crazy credits
              - generic [ref=e1277] [cursor=pointer]:
                - button "See more" [ref=e1278]
                - generic [ref=e1283]: The man who cried and was beaten when Andy first arrived is listed and credited as "Fat Ass" -- the other inmates' nickname for him.
              - link "See more" [ref=e1284] [cursor=pointer]:
                - /url: /title/tt0111161/crazycredits/?tab=cz&ref_=tt_dyk_cc
            - generic [ref=e1287]:
              - link "See more" [ref=e1288]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
                - text: Alternate versions
              - generic [ref=e1290] [cursor=pointer]:
                - button "See more" [ref=e1291]
                - generic [ref=e1296]: This film was produced independently by Castle Rock Entertainment, but distributed by Columbia Pictures, which placed their logo at the beginning of the film. After the first video release, Castle Rock began to use Warner Bros. as their distributor. This film was then later re-issued on video and DVD by Warner Bros., which replaced the Columbia Pictures logo with their own. (The 1999 WB DVD uses no studio logo before Castle Rock [A Turner Company], and has no Columbia line-art logo at the end, just 10 seconds of blank screen as the music finishes. The post-2004 prints start with the 2003 WB logo and an updated Castle Rock logo [A TimeWarner Company], and have the Columbia line-art logo in the crawl at the end followed by a quick, still, 2003 WB logo. See also The American President.)
              - link "See more" [ref=e1297] [cursor=pointer]:
                - /url: /title/tt0111161/alternateversions/?tab=cz&ref_=tt_dyk_alt
            - generic [ref=e1300]:
              - link "See more" [ref=e1301]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
                - text: Connections
              - generic [ref=e1303] [cursor=pointer]:
                - button "See more" [ref=e1304]
                - generic [ref=e1307]:
                  - text: Featured in
                  - 'link "At the Movies with Ebert & Roeper: Why Gump? Why Now?" [ref=e1308]':
                    - /url: /title/tt1936736/?ref_=tt_dyk_cnn
                  - text: (1994)
              - link "See more" [ref=e1309] [cursor=pointer]:
                - /url: /title/tt0111161/movieconnections/?ref_=tt_dyk_cnn
            - generic [ref=e1312]:
              - link "See more" [ref=e1313]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
                - text: Soundtracks
              - generic [ref=e1315] [cursor=pointer]:
                - button "See more" [ref=e1316]
                - generic [ref=e1319]:
                  - text: If I Didn't Care
                  - generic [ref=e1320]:
                    - text: by
                    - link "Jack Lawrence" [ref=e1321]:
                      - /url: /name/nm0492805/?ref_=dyk_snd
                  - generic [ref=e1322]:
                    - text: Performed by
                    - link "The Ink Spots" [ref=e1323]:
                      - /url: /name/nm1311414/?ref_=dyk_snd
                  - generic [ref=e1324]: Courtesy of MCA Records
              - link "See more" [ref=e1325] [cursor=pointer]:
                - /url: /title/tt0111161/soundtrack/?ref_=tt_dyk_snd
          - generic [ref=e1329]:
            - generic [ref=e1330]:
              - link "Top picks" [ref=e1331]:
                - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                - heading "Top picks" [level=3] [ref=e1332]:
                  - generic [ref=e1333]: Top picks
              - generic [ref=e1335]: Sign in to rate and Watchlist for personalized recommendations
            - link "Sign in" [ref=e1336] [cursor=pointer]:
              - /url: /registration/signin?ref_=tt_tpks_signin
              - generic [ref=e1337]: Sign in
          - generic [ref=e1339]:
            - link "FAQ 47" [ref=e1341]:
              - /url: /title/tt0111161/faq/?ref_=tt_faq_sm
              - heading "FAQ 47" [level=3] [ref=e1342]:
                - generic [ref=e1343]: FAQ
                - generic [ref=e1344]: "47"
            - generic [ref=e1346]:
              - generic [ref=e1347] [cursor=pointer]:
                - link "How long is The Shawshank Redemption?" [ref=e1349]:
                  - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
                - generic [ref=e1350]: Powered by Alexa
              - link "See the answer" [ref=e1352] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_1#run-time
              - link "Does the novella explain why Fat Ass is in prison? He seems too much like a cry baby to have committed any crimes." [ref=e1357]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "See the answer" [ref=e1358] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_2#fq0102172
              - link "Why does Andy talk in code to Red at the movie about getting Rita Hayworth since they have already done business before and Andy asked for the rock hammer in the same way?" [ref=e1363]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "See the answer" [ref=e1364] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_3#fq0110659
              - link "Why is Captain Hadley so cruel?" [ref=e1369]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
              - link "See the answer" [ref=e1370] [cursor=pointer]:
                - /url: /title/tt0111161/faq/?ref_=tt_faq_4#fq0123661
          - generic [ref=e1373]:
            - generic [ref=e1375]:
              - heading "Details" [level=3] [ref=e1377]:
                - generic [ref=e1378]: Details
              - 'button "Details: edit" [ref=e1380] [cursor=pointer]':
                - generic [ref=e1383]: Edit
            - generic [ref=e1384]:
              - link "See more" [ref=e1385]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
                - text: Release date
              - link "October 14, 1994 (United States)" [ref=e1387]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - link "See more" [ref=e1388] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_rdat
              - generic [ref=e1391]: Country of origin
              - link "United States" [ref=e1393]:
                - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
              - generic "See more" [ref=e1394]: Official sites
              - generic [ref=e1395]:
                - link "Official Facebook" [ref=e1396]:
                  - /url: https://www.facebook.com/shawshankredemptionfilm/
                  - text: Official Facebook
                - link "Warner Bros. (United States)" [ref=e1398]:
                  - /url: https://www.warnerbros.com/movies/shawshank-redemption
                  - text: Warner Bros. (United States)
              - generic [ref=e1400]: Language
              - link "English" [ref=e1402]:
                - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
              - link "See more" [ref=e1403]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
                - text: Also known as
              - generic [ref=e1404] [cursor=pointer]: Sueño de fuga
              - link "See more" [ref=e1405] [cursor=pointer]:
                - /url: /title/tt0111161/releaseinfo/?ref_=tt_dt_aka#akas
              - link "See more" [ref=e1408]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
                - text: Filming locations
              - generic [ref=e1409] [cursor=pointer]:
                - link "Butler, Ohio, USA" [ref=e1410]:
                  - /url: /search/title/?locations=Butler%40%40%40%20Ohio%40%40%40%20USA&ref_=tt_dt_loc
                - text: (Exterior, rural town of "Buxton" where "Red" journeys to; shot of bus leaving with "Red" near end of film)
              - link "See more" [ref=e1411] [cursor=pointer]:
                - /url: /title/tt0111161/locations/?ref_=tt_dt_loc
              - link "See more" [ref=e1414]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
                - text: Production company
              - link "Castle Rock Entertainment" [ref=e1416]:
                - /url: /company/co0040620/?ref_=tt_dt_cmpy_1
              - link "See more" [ref=e1417] [cursor=pointer]:
                - /url: /title/tt0111161/companycredits/?ref_=tt_dt_cmpy
              - link "See more" [ref=e1420]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                - text: See more company credits at IMDbPro
              - link "See more" [ref=e1421] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0111161/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
          - generic [ref=e1423]:
            - generic [ref=e1425]:
              - heading "Box office" [level=3] [ref=e1427]:
                - generic [ref=e1428]: Box office
              - 'button "Box office: edit" [ref=e1430] [cursor=pointer]':
                - generic [ref=e1433]: Edit
            - generic [ref=e1434]:
              - generic [ref=e1435]: Budget
              - generic [ref=e1436]: $25,000,000 (estimated)
              - generic [ref=e1437]: Gross US & Canada
              - generic [ref=e1438]: $28,767,189
              - generic [ref=e1439]: Opening weekend US & Canada
              - generic [ref=e1440]: $727,327 Sep 25, 1994
              - generic [ref=e1441]: Gross worldwide
              - generic [ref=e1442]: $29,420,884
              - generic [ref=e1443]:
                - link "Go to IMDbPro" [ref=e1444]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - img [ref=e1445]
                - link "See detailed box office info on IMDbPro" [ref=e1455]:
                  - /url: https://pro.imdb.com/title/tt0111161/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                  - text: See detailed box office info on IMDbPro
          - generic [ref=e1457]:
            - generic [ref=e1459]:
              - link "Tech specs" [ref=e1460]:
                - /url: /title/tt0111161/technical/?ref_=tt_spec_sm
                - heading "Tech specs" [level=3] [ref=e1461]:
                  - generic [ref=e1462]: Tech specs
              - 'button "Tech specs: edit" [ref=e1465] [cursor=pointer]':
                - generic [ref=e1468]: Edit
            - generic [ref=e1469]:
              - generic [ref=e1470]: Runtime
              - generic [ref=e1471]: 2h 22m(142 min)
              - generic [ref=e1472]: Color
              - link "Color" [ref=e1474]:
                - /url: /search/title/?colors=color&ref_=tt_spec_att
              - generic [ref=e1475]: Sound mix
              - link "Dolby Digital" [ref=e1477]:
                - /url: /search/title/?sound_mixes=dolby_digital&ref_=tt_spec_att
              - generic [ref=e1478]: Aspect ratio
              - generic [ref=e1479]: "1.85 : 1"
          - generic [ref=e1483]:
            - generic [ref=e1484]:
              - link "Contribute to this page" [ref=e1485]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
                - heading "Contribute to this page" [level=3] [ref=e1486]:
                  - generic [ref=e1487]: Contribute to this page
              - generic [ref=e1489]: Suggest an edit or add missing content
            - generic [ref=e1490]:
              - link "Go to Learn more about contributing" [ref=e1491]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                - text: Learn more about contributing
              - link "Go to Learn more about contributing" [ref=e1492] [cursor=pointer]:
                - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
            - link "Edit page" [ref=e1496] [cursor=pointer]:
              - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0111161%2F
              - generic [ref=e1499]: Edit page
        - heading "More to explore" [level=3] [ref=e1508]
  - generic [ref=e1513]:
    - heading "Recently viewed" [level=3] [ref=e1516]
    - generic [ref=e1518]: You have no recently viewed pages
  - contentinfo [ref=e1519]:
    - link "Sign in for more access" [ref=e1521] [cursor=pointer]:
      - /url: /registration/signin/?u=%2F&ref_=tt_ftr_reg
      - generic [ref=e1522]: Sign in for more access
    - generic [ref=e1523]:
      - generic [ref=e1524]:
        - generic [ref=e1525]:
          - generic [ref=e1526]: Follow IMDb on social
          - link "TikTok" [ref=e1527] [cursor=pointer]:
            - /url: https://www.tiktok.com/@imdb
          - link "Instagram" [ref=e1529] [cursor=pointer]:
            - /url: https://instagram.com/imdb
          - link "Twitter" [ref=e1532] [cursor=pointer]:
            - /url: https://twitter.com/imdb
          - link "YouTube" [ref=e1534] [cursor=pointer]:
            - /url: https://youtube.com/imdb/
          - link "Facebook" [ref=e1536] [cursor=pointer]:
            - /url: https://facebook.com/imdb
        - generic [ref=e1538]:
          - generic [ref=e1539]:
            - generic [ref=e1540]: Get the IMDb app
            - generic [ref=e1541]: For Android and iOS
          - group [ref=e1543]:
            - generic [ref=e1544]:
              - img "Get the IMDb app"
            - link "For Android and iOS" [ref=e1545]:
              - /url: https://slyb.app.link/Aa96cLcBeAb
      - generic [ref=e1547]:
        - link "Help" [ref=e1548]:
          - /url: https://help.imdb.com/imdb
          - text: Help
        - link "Site Index" [ref=e1550]:
          - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
          - text: Site Index
        - link "IMDbPro" [ref=e1552]:
          - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
          - text: IMDbPro
        - link "Box Office Mojo" [ref=e1554]:
          - /url: https://www.boxofficemojo.com
          - text: Box Office Mojo
        - link "License IMDb Data" [ref=e1556]:
          - /url: https://developer.imdb.com/
          - text: License IMDb Data
      - generic [ref=e1558]:
        - link "Press Room" [ref=e1559]:
          - /url: /pressroom/?ref_=tt_ftr
        - link "Advertising" [ref=e1560]:
          - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
          - text: Advertising
        - link "Jobs" [ref=e1562]:
          - /url: https://www.amazon.jobs/en/teams/imdb
          - text: Jobs
        - link "Conditions of Use" [ref=e1564]:
          - /url: /conditions/?ref_=tt_ftr
        - link "Privacy Policy" [ref=e1565]:
          - /url: /privacy/?ref_=tt_ftr
        - generic [ref=e1566]:
          - link "Your Ads Privacy Choices" [ref=e1567]:
            - /url: /privacy/redirect/?ref_=tt_ftr
            - img [ref=e1568]
          - link "Your Ads Privacy Choices" [ref=e1580]:
            - /url: /privacy/redirect/?ref_=tt_ftr
    - img "IMDb, an Amazon company" [ref=e1582]
    - paragraph [ref=e1652]: © 1990-2026 by IMDb.com, Inc.
  - button "Back to top" [ref=e1653] [cursor=pointer]:
    - generic [ref=e1656]: Back to top
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