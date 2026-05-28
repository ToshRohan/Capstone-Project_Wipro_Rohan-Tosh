# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: imdb_top250movies.spec.js >> IMDb Top 250 Movies >> test
- Location: tests\imdb_top250movies.spec.js:48:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('img[alt="12 Angry Men"]')
Expected: visible
Error: strict mode violation: locator('img[alt="12 Angry Men"]') resolved to 2 elements:
    1) <img width="500" loading="lazy" class="ipc-image" alt="12 Angry Men" sizes="100vw, (min-width: 480px) 68vw, (min-width: 600px) 52vw, (min-width: 1024px) 32vw, (min-width: 1280px) 32vw" src="https://m.media-amazon.com/images/M/MV5BNjE3MWNhZDYtYjFlMS00MzM4LTg5M2YtYTAwMGY2ZDg0OGY0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg" srcset="https://m.media-amazon.com/images/M/MV5BNjE3MWNhZDYtYjFlMS00MzM4LTg5M2YtYTAwMGY2ZDg0OGY0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg …/> aka getByTestId('grid_first_row_video').getByRole('img', { name: 'Angry Men' })
    2) <img width="500" loading="lazy" class="ipc-image" alt="12 Angry Men" sizes="100vw, (min-width: 480px) 68vw, (min-width: 600px) 52vw, (min-width: 1024px) 32vw, (min-width: 1280px) 32vw" src="https://m.media-amazon.com/images/M/MV5BNjE3MWNhZDYtYjFlMS00MzM4LTg5M2YtYTAwMGY2ZDg0OGY0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg" srcset="https://m.media-amazon.com/images/M/MV5BNjE3MWNhZDYtYjFlMS00MzM4LTg5M2YtYTAwMGY2ZDg0OGY0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg …/> aka getByTestId('grid_second_row_video').getByAltText('Angry Men')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('img[alt="12 Angry Men"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - status [ref=e30]: 8 suggestions available
        - button "Submit search" [ref=e31] [cursor=pointer]
      - link "Go To IMDb Pro" [ref=e36] [cursor=pointer]:
        - /url: https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm
        - img [ref=e39]
      - link "Watchlist" [ref=e51] [cursor=pointer]:
        - /url: /list/watchlist/?ref_=tt_nv_urwls_all
        - generic [ref=e53]: Watchlist
      - generic [ref=e54]:
        - link "Sign in" [ref=e55] [cursor=pointer]:
          - /url: /registration/signin/?u=%2Ftitle%2Ftt0050083%2F&ref_=tt_nv_generic_lgin
          - generic [ref=e56]: Sign in
        - generic [ref=e60]:
          - generic [ref=e61]:
            - link "Sign in" [ref=e63] [cursor=pointer]:
              - /url: /registration/signin/?u=%2Ftitle%2Ftt0050083%2F&ref_=tt_nv_signup_cm_btn
              - generic [ref=e64]: Sign in
            - button "Close" [ref=e65] [cursor=pointer]
          - generic [ref=e68]:
            - text: New customer?
            - link "Create account" [ref=e69]:
              - /url: /registration/signin/?u=%2Ftitle%2Ftt0050083%2F&ref_=tt_nv_generic_lgin
      - generic "Toggle language selector" [ref=e72] [cursor=pointer]:
        - generic [ref=e74]: EN
      - status
      - status
    - main [ref=e77]:
      - iframe [ref=e79]:
        
      - generic [ref=e80]:
        - generic [ref=e85]:
          - generic [ref=e87]:
            - link "Cast & crew" [ref=e88]:
              - /url: /title/tt0050083/fullcredits/?ref_=tt_ov_ql_1
            - link "User reviews" [ref=e89]:
              - /url: /title/tt0050083/reviews/?ref_=tt_ov_ql_2
            - link "Trivia" [ref=e90]:
              - /url: /title/tt0050083/trivia/?ref_=tt_ov_ql_3
            - link "FAQ" [ref=e91]:
              - /url: /title/tt0050083/faq/?ref_=tt_ov_ql_4
            - link "IMDbPro" [ref=e93]:
              - /url: https://pro.imdb.com/title/tt0050083/?rf=cons_tt_ov_hdr&ref_=cons_tt_ov_hdr
            - button "View all topics" [ref=e94] [cursor=pointer]:
              - generic [ref=e96]: All topics
            - button "Share on social media" [ref=e98] [cursor=pointer]
          - generic [ref=e101]:
            - generic [ref=e102]:
              - heading "12 Angry Men" [level=1] [ref=e103]
              - link "1957" [ref=e104]:
                - /url: /title/tt0050083/releaseinfo/?ref_=tt_ov_rdat
              - link "Approved" [ref=e105]:
                - /url: /title/tt0050083/parentalguide/?ref_=tt_ov_pg#certificates
              - text: 1h 36m
            - generic [ref=e107]:
              - generic [ref=e108]:
                - generic [ref=e109]: IMDb RATING
                - link "View User Ratings" [ref=e110] [cursor=pointer]:
                  - /url: /title/tt0050083/ratings/?ref_=tt_ov_rat
                  - generic [ref=e115]:
                    - generic [ref=e116]:
                      - generic [ref=e117]: "9.0"
                      - generic [ref=e118]: /10
                    - generic [ref=e119]: 985K
              - generic [ref=e120]:
                - generic [ref=e121]: YOUR RATING
                - button "Rate 12 Angry Men" [ref=e122] [cursor=pointer]:
                  - generic [ref=e129]: Rate
              - generic [ref=e130]:
                - generic [ref=e131]: POPULARITY
                - link "View Popular Movies" [ref=e132] [cursor=pointer]:
                  - /url: /chart/moviemeter/?ref_=tt_ov_pop
                  - generic [ref=e137]:
                    - generic [ref=e138]: "181"
                    - generic [ref=e139]: "4"
          - generic [ref=e142]:
            - generic [ref=e143]:
              - group [ref=e145]:
                - img "Henry Fonda, Martin Balsam, Jack Klugman, Lee J. Cobb, Ed Begley, Edward Binns, John Fiedler, E.G. Marshall, Joseph Sweeney, George Voskovec, Jack Warden, and Robert Webber in 12 Angry Men (1957)" [ref=e147]
                - button "Add to Watchlist" [ref=e148] [cursor=pointer]
                - link "View ’12 Angry Men’ Poster" [ref=e153]:
                  - /url: /title/tt0050083/mediaviewer/rm2927108352/?ref_=tt_ov_i
              - generic [ref=e155]:
                - button "Video Autoplay Preference" [ref=e157] [cursor=pointer]
                - group [ref=e159] [cursor=pointer]:
                  - img "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict." [ref=e161]
                  - generic "Watch Official Trailer" [ref=e162]:
                    - generic [ref=e169]: Play trailer2:14
                  - generic "Watch Official Trailer" [ref=e171]
              - generic [ref=e173]:
                - link "2 Videos" [ref=e174] [cursor=pointer]:
                  - /url: /title/tt0050083/videogallery/?ref_=tt_ov_vi_sm
                  - generic [ref=e178]: 2 Videos
                - link "99+ Photos" [ref=e179] [cursor=pointer]:
                  - /url: /title/tt0050083/mediaviewer/rm1211738113/?ref_=tt_ov_m_sm
                  - generic [ref=e184]: 99+ Photos
            - generic [ref=e185]:
              - generic [ref=e187]:
                - generic [ref=e189]:
                  - link "Legal Drama" [ref=e190] [cursor=pointer]:
                    - /url: /interest/in0000081/?ref_=tt_ov_in_1
                    - generic [ref=e191]: Legal Drama
                  - link "Psychological Drama" [ref=e192] [cursor=pointer]:
                    - /url: /interest/in0000086/?ref_=tt_ov_in_2
                    - generic [ref=e193]: Psychological Drama
                  - link "Crime" [ref=e194] [cursor=pointer]:
                    - /url: /interest/in0000052/?ref_=tt_ov_in_3
                    - generic [ref=e195]: Crime
                  - link "Drama" [ref=e196] [cursor=pointer]:
                    - /url: /interest/in0000076/?ref_=tt_ov_in_4
                    - generic [ref=e197]: Drama
                - paragraph [ref=e198]:
                  - generic [ref=e199]: The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.
                - generic [ref=e200]:
                  - generic [ref=e201]: Director
                  - link "Sidney Lumet" [ref=e203]:
                    - /url: /name/nm0001486/?ref_=tt_ov_1_1
                  - generic [ref=e204]: Writer
                  - link "Reginald Rose" [ref=e206]:
                    - /url: /name/nm0741627/?ref_=tt_ov_2_1
                  - link "See full cast and crew" [ref=e207]:
                    - /url: /title/tt0050083/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                    - text: Stars
                  - generic [ref=e208] [cursor=pointer]:
                    - link "Henry Fonda" [ref=e209]:
                      - /url: /name/nm0000020/?ref_=tt_ov_3_1
                    - link "Lee J. Cobb" [ref=e210]:
                      - /url: /name/nm0002011/?ref_=tt_ov_3_2
                    - link "Martin Balsam" [ref=e211]:
                      - /url: /name/nm0000842/?ref_=tt_ov_3_3
                  - link "See full cast and crew" [ref=e212] [cursor=pointer]:
                    - /url: /title/tt0050083/fullcredits/?ref_=tt_ov_sm_3#amzn1.imdb.concept.name_credit_group.7caf7d16-5db9-4f4f-8864-d4c6e711c686
                - generic [ref=e216]:
                  - link "Go to IMDbPro" [ref=e217]:
                    - /url: https://pro.imdb.com/title/tt0050083/?rf=cons_tt_atf&ref_=cons_tt_atf
                    - img [ref=e218]
                  - link "See production info at IMDbPro" [ref=e228]:
                    - /url: https://pro.imdb.com/title/tt0050083/?rf=cons_tt_atf&ref_=cons_tt_atf
                    - text: See production info at IMDbPro
              - generic [ref=e230]:
                - generic [ref=e231]:
                  - generic [ref=e233]:
                    - generic [ref=e234]:
                      - generic [ref=e235]: STREAMING
                      - group [ref=e236]:
                        - group [ref=e237]:
                          - generic [ref=e238]:
                            - img "Watch on MGM+"
                          - link "Watch on MGM+" [ref=e239]:
                            - /url: https://www.primevideo.com/detail/amzn1.dv.gti.c8b6b788-95ee-1a10-9b93-672cd7835109
                    - generic [ref=e241]:
                      - generic [ref=e242]: RENT/BUY
                      - group [ref=e243]:
                        - group [ref=e244]:
                          - generic [ref=e245]:
                            - img "Watch on Prime Video"
                          - link "Watch on Prime Video" [ref=e246]:
                            - /url: https://www.primevideo.com/detail/amzn1.dv.gti.c8b6b788-95ee-1a10-9b93-672cd7835109
                        - link "Watch on Prime Video" [ref=e248] [cursor=pointer]:
                          - /url: https://www.primevideo.com/detail/amzn1.dv.gti.c8b6b788-95ee-1a10-9b93-672cd7835109
                          - generic [ref=e249]: from ₹119.00
                  - generic [ref=e250]:
                    - link "Set your preferred services" [ref=e251] [cursor=pointer]:
                      - /url: /preferences/preferredservices/?ref_=tt_ov_wbr_btn
                      - generic [ref=e254]: Set your preferred services
                    - generic [ref=e255] [cursor=pointer]:
                      - button "Add to Watchlist Added by 799K users" [ref=e256]:
                        - generic [ref=e258]:
                          - generic [ref=e259]: Add to Watchlist
                          - generic [ref=e260]: Added by 799K users
                      - button "Add title to another list" [ref=e261]
                    - button "Mark 12 Angry Men as watched" [ref=e264] [cursor=pointer]:
                      - generic [ref=e267]: Mark as watched
                - link "2.4K User reviews" [ref=e268]:
                  - /url: /title/tt0050083/reviews/?ref_=tt_ov_ururv
                  - generic [ref=e269]:
                    - generic [ref=e270]: 2.4K
                    - generic [ref=e271]: User reviews
                - link "176 Critic reviews" [ref=e272]:
                  - /url: /title/tt0050083/externalreviews/?ref_=tt_ov_crv
                  - generic [ref=e273]:
                    - generic [ref=e274]: "176"
                    - generic [ref=e275]: Critic reviews
                - link "97 Metascore" [ref=e276]:
                  - /url: /title/tt0050083/criticreviews/?ref_=tt_ov_msc
                  - generic [ref=e277]:
                    - generic [ref=e279]: "97"
                    - generic [ref=e280]: Metascore
        - generic [ref=e282]:
          - generic [ref=e283]:
            - generic [ref=e285]:
              - 'link "Top rated movie #5" [ref=e287]':
                - /url: /chart/top/?ref_=tt_awd
              - link "See more awards and nominations" [ref=e288]:
                - /url: /title/tt0050083/awards/?ref_=tt_awd
                - text: Nominated for 3 Oscars
              - generic [ref=e289] [cursor=pointer]: 16 wins & 12 nominations total
              - link "See more awards and nominations" [ref=e290] [cursor=pointer]:
                - /url: /title/tt0050083/awards/?ref_=tt_awd
            - generic [ref=e293]:
              - link "Videos 2" [ref=e295]:
                - /url: /title/tt0050083/videogallery/?ref_=tt_vids_sm
                - heading "Videos 2" [level=3] [ref=e296]:
                  - text: Videos
                  - generic [ref=e297]: "2"
              - generic [ref=e300]:
                - group [ref=e301]:
                  - group [ref=e302]:
                    - generic [ref=e303]:
                      - img "Official Trailer"
                    - link "TrailerOfficial Trailer" [ref=e304]:
                      - /url: /video/vi2924462873/?ref_=tt_vids_vi_1
                      - generic [ref=e309]: Trailer 2:14
                  - link "TrailerOfficial Trailer" [ref=e312] [cursor=pointer]:
                    - /url: /video/vi2924462873/?ref_=tt_vids_vi_t_1
                    - generic [ref=e313]: Official Trailer
                - group [ref=e316]:
                  - group [ref=e317]:
                    - generic [ref=e318]:
                      - img "12 Angry Men"
                    - link "Trailer12 Angry Men" [ref=e319]:
                      - /url: /video/vi3452609817/?ref_=tt_vids_vi_2
                      - generic [ref=e324]: Trailer 1:36
                  - link "Trailer12 Angry Men" [ref=e327] [cursor=pointer]:
                    - /url: /video/vi3452609817/?ref_=tt_vids_vi_t_2
                    - generic [ref=e328]: 12 Angry Men
            - generic [ref=e332]:
              - generic [ref=e334]:
                - link "Photos 134" [ref=e335]:
                  - /url: /title/tt0050083/mediaviewer/rm1211738113/?ref_=tt_ph_sm
                  - heading "Photos 134" [level=3] [ref=e336]:
                    - text: Photos
                    - generic [ref=e337]: "134"
                - button "Add photo" [ref=e340] [cursor=pointer]:
                  - generic [ref=e342]: Add photo
              - generic [ref=e343]:
                - generic [ref=e344]:
                  - link "View Poster" [ref=e345] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm1211738113/?ref_=tt_ph_1
                    - img "View Poster" [ref=e347]
                  - link "View Poster" [ref=e348] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm1815717889/?ref_=tt_ph_2
                    - img "View Poster" [ref=e350]
                  - link "View Poster" [ref=e351] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm1631168513/?ref_=tt_ph_3
                    - img "View Poster" [ref=e353]
                - generic [ref=e354]:
                  - link "View Poster" [ref=e355] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm322545665/?ref_=tt_ph_1_1
                    - img "View Poster" [ref=e357]
                  - link "View Poster" [ref=e358] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm852085760/?ref_=tt_ph_1_2
                    - img "View Poster" [ref=e360]
                  - link "View Poster" [ref=e361] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm835308544/?ref_=tt_ph_1_3
                    - img "View Poster" [ref=e363]
                  - link "View Poster" [ref=e364] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm818531328/?ref_=tt_ph_1_4
                    - img "View Poster" [ref=e366]
                  - link "+ 127 View Poster" [ref=e367] [cursor=pointer]:
                    - /url: /title/tt0050083/mediaviewer/rm2298052864/?ref_=tt_ph_more
                    - generic [ref=e368]: + 127
                    - img "View Poster" [ref=e370]
            - generic [ref=e371]:
              - generic [ref=e373]:
                - link "Top Cast 18" [ref=e374]:
                  - /url: /title/tt0050083/fullcredits/?ref_=tt_cst_sm
                  - heading "Top Cast 18" [level=3] [ref=e375]:
                    - generic [ref=e376]: Top Cast
                    - generic [ref=e377]: "18"
                - 'button "Top Cast: edit" [ref=e380] [cursor=pointer]':
                  - generic [ref=e383]: Edit
              - group [ref=e384]:
                - generic [ref=e385]:
                  - generic [ref=e386]:
                    - group [ref=e388]:
                      - generic [ref=e389]:
                        - img "Henry Fonda"
                      - button "Add Henry Fonda to favorite people" [ref=e390] [cursor=pointer]
                      - link "Go to Henry Fonda" [ref=e392]:
                        - /url: /name/nm0000020/?ref_=tt_cst_i_1
                    - generic [ref=e394]:
                      - link "Henry Fonda" [ref=e395]:
                        - /url: /name/nm0000020/?ref_=tt_cst_t_1
                      - link "Juror 8" [ref=e397] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0000020/?ref_=tt_cst_c_1
                  - generic [ref=e398]:
                    - group [ref=e400]:
                      - generic [ref=e401]:
                        - img "Lee J. Cobb"
                      - button "Add Lee J. Cobb to favorite people" [ref=e402] [cursor=pointer]
                      - link "Go to Lee J. Cobb" [ref=e404]:
                        - /url: /name/nm0002011/?ref_=tt_cst_i_2
                    - generic [ref=e406]:
                      - link "Lee J. Cobb" [ref=e407]:
                        - /url: /name/nm0002011/?ref_=tt_cst_t_2
                      - link "Juror 3" [ref=e409] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0002011/?ref_=tt_cst_c_2
                  - generic [ref=e410]:
                    - group [ref=e412]:
                      - generic [ref=e413]:
                        - img "Martin Balsam"
                      - button "Add Martin Balsam to favorite people" [ref=e414] [cursor=pointer]
                      - link "Go to Martin Balsam" [ref=e416]:
                        - /url: /name/nm0000842/?ref_=tt_cst_i_3
                    - generic [ref=e418]:
                      - link "Martin Balsam" [ref=e419]:
                        - /url: /name/nm0000842/?ref_=tt_cst_t_3
                      - link "Juror 1" [ref=e421] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0000842/?ref_=tt_cst_c_3
                  - generic [ref=e422]:
                    - group [ref=e424]:
                      - generic [ref=e425]:
                        - img "John Fiedler"
                      - button "Add John Fiedler to favorite people" [ref=e426] [cursor=pointer]
                      - link "Go to John Fiedler" [ref=e428]:
                        - /url: /name/nm0275835/?ref_=tt_cst_i_4
                    - generic [ref=e430]:
                      - link "John Fiedler" [ref=e431]:
                        - /url: /name/nm0275835/?ref_=tt_cst_t_4
                      - link "Juror 2" [ref=e433] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0275835/?ref_=tt_cst_c_4
                  - generic [ref=e434]:
                    - group [ref=e436]:
                      - generic [ref=e437]:
                        - img "E.G. Marshall"
                      - button "Add E.G. Marshall to favorite people" [ref=e438] [cursor=pointer]
                      - link "Go to E.G. Marshall" [ref=e440]:
                        - /url: /name/nm0550855/?ref_=tt_cst_i_5
                    - generic [ref=e442]:
                      - link "E.G. Marshall" [ref=e443]:
                        - /url: /name/nm0550855/?ref_=tt_cst_t_5
                      - link "Juror 4" [ref=e445] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0550855/?ref_=tt_cst_c_5
                  - generic [ref=e446]:
                    - group [ref=e448]:
                      - generic [ref=e449]:
                        - img "Jack Klugman"
                      - button "Add Jack Klugman to favorite people" [ref=e450] [cursor=pointer]
                      - link "Go to Jack Klugman" [ref=e452]:
                        - /url: /name/nm0001430/?ref_=tt_cst_i_6
                    - generic [ref=e454]:
                      - link "Jack Klugman" [ref=e455]:
                        - /url: /name/nm0001430/?ref_=tt_cst_t_6
                      - link "Juror 5" [ref=e457] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0001430/?ref_=tt_cst_c_6
                  - generic [ref=e458]:
                    - group [ref=e460]:
                      - generic [ref=e461]:
                        - img "Edward Binns"
                      - button "Add Edward Binns to favorite people" [ref=e462] [cursor=pointer]
                      - link "Go to Edward Binns" [ref=e464]:
                        - /url: /name/nm0083081/?ref_=tt_cst_i_7
                    - generic [ref=e466]:
                      - link "Edward Binns" [ref=e467]:
                        - /url: /name/nm0083081/?ref_=tt_cst_t_7
                      - link "Juror 6" [ref=e469] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0083081/?ref_=tt_cst_c_7
                  - generic [ref=e470]:
                    - group [ref=e472]:
                      - generic [ref=e473]:
                        - img "Jack Warden"
                      - button "Add Jack Warden to favorite people" [ref=e474] [cursor=pointer]
                      - link "Go to Jack Warden" [ref=e476]:
                        - /url: /name/nm0912001/?ref_=tt_cst_i_8
                    - generic [ref=e478]:
                      - link "Jack Warden" [ref=e479]:
                        - /url: /name/nm0912001/?ref_=tt_cst_t_8
                      - link "Juror 7" [ref=e481] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0912001/?ref_=tt_cst_c_8
                  - generic [ref=e482]:
                    - group [ref=e484]:
                      - generic [ref=e485]:
                        - img "Joseph Sweeney"
                      - button "Add Joseph Sweeney to favorite people" [ref=e486] [cursor=pointer]
                      - link "Go to Joseph Sweeney" [ref=e488]:
                        - /url: /name/nm0842137/?ref_=tt_cst_i_9
                    - generic [ref=e490]:
                      - link "Joseph Sweeney" [ref=e491]:
                        - /url: /name/nm0842137/?ref_=tt_cst_t_9
                      - link "Juror 9" [ref=e493] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0842137/?ref_=tt_cst_c_9
                  - generic [ref=e494]:
                    - group [ref=e496]:
                      - generic [ref=e497]:
                        - img "Ed Begley"
                      - button "Add Ed Begley to favorite people" [ref=e498] [cursor=pointer]
                      - link "Go to Ed Begley" [ref=e500]:
                        - /url: /name/nm0003225/?ref_=tt_cst_i_10
                    - generic [ref=e502]:
                      - link "Ed Begley" [ref=e503]:
                        - /url: /name/nm0003225/?ref_=tt_cst_t_10
                      - link "Juror 10" [ref=e505] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0003225/?ref_=tt_cst_c_10
                  - generic [ref=e506]:
                    - group [ref=e508]:
                      - generic [ref=e509]:
                        - img "George Voskovec"
                      - button "Add George Voskovec to favorite people" [ref=e510] [cursor=pointer]
                      - link "Go to George Voskovec" [ref=e512]:
                        - /url: /name/nm0903667/?ref_=tt_cst_i_11
                    - generic [ref=e514]:
                      - link "George Voskovec" [ref=e515]:
                        - /url: /name/nm0903667/?ref_=tt_cst_t_11
                      - link "Juror 11" [ref=e517] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0903667/?ref_=tt_cst_c_11
                  - generic [ref=e518]:
                    - group [ref=e520]:
                      - generic [ref=e521]:
                        - img "Robert Webber"
                      - button "Add Robert Webber to favorite people" [ref=e522] [cursor=pointer]
                      - link "Go to Robert Webber" [ref=e524]:
                        - /url: /name/nm0916434/?ref_=tt_cst_i_12
                    - generic [ref=e526]:
                      - link "Robert Webber" [ref=e527]:
                        - /url: /name/nm0916434/?ref_=tt_cst_t_12
                      - link "Juror 12" [ref=e529] [cursor=pointer]:
                        - /url: /title/tt0050083/characters/nm0916434/?ref_=tt_cst_c_12
                  - generic [ref=e530]:
                    - group [ref=e532]:
                      - generic [ref=e533]:
                        - img "Rudy Bond"
                      - button "Add Rudy Bond to favorite people" [ref=e534] [cursor=pointer]
                      - link "Go to Rudy Bond" [ref=e536]:
                        - /url: /name/nm0094036/?ref_=tt_cst_i_13
                    - generic [ref=e538]:
                      - link "Rudy Bond" [ref=e539]:
                        - /url: /name/nm0094036/?ref_=tt_cst_t_13
                      - generic [ref=e540]:
                        - link "Judge" [ref=e541] [cursor=pointer]:
                          - /url: /title/tt0050083/characters/nm0094036/?ref_=tt_cst_c_13
                        - text: (uncredited)
                  - generic [ref=e542]:
                    - group [ref=e544]:
                      - img [ref=e546]
                      - button "Add Tom Gorman to favorite people" [ref=e548] [cursor=pointer]
                      - link "Go to Tom Gorman" [ref=e550]:
                        - /url: /name/nm0331131/?ref_=tt_cst_i_14
                    - generic [ref=e552]:
                      - link "Tom Gorman" [ref=e553]:
                        - /url: /name/nm0331131/?ref_=tt_cst_t_14
                      - generic [ref=e554]:
                        - link "Stenographer" [ref=e555] [cursor=pointer]:
                          - /url: /title/tt0050083/characters/nm0331131/?ref_=tt_cst_c_14
                        - text: (uncredited)
                  - generic [ref=e556]:
                    - group [ref=e558]:
                      - img [ref=e560]
                      - button "Add James Kelly to favorite people" [ref=e562] [cursor=pointer]
                      - link "Go to James Kelly" [ref=e564]:
                        - /url: /name/nm0446450/?ref_=tt_cst_i_15
                    - generic [ref=e566]:
                      - link "James Kelly" [ref=e567]:
                        - /url: /name/nm0446450/?ref_=tt_cst_t_15
                      - generic [ref=e568]:
                        - link "Guard" [ref=e569] [cursor=pointer]:
                          - /url: /title/tt0050083/characters/nm0446450/?ref_=tt_cst_c_15
                        - text: (uncredited)
                  - generic [ref=e570]:
                    - group [ref=e572]:
                      - generic [ref=e573]:
                        - img "Billy Nelson"
                      - button "Add Billy Nelson to favorite people" [ref=e574] [cursor=pointer]
                      - link "Go to Billy Nelson" [ref=e576]:
                        - /url: /name/nm0625180/?ref_=tt_cst_i_16
                    - generic [ref=e578]:
                      - link "Billy Nelson" [ref=e579]:
                        - /url: /name/nm0625180/?ref_=tt_cst_t_16
                      - generic [ref=e580]:
                        - link "Court Clerk" [ref=e581] [cursor=pointer]:
                          - /url: /title/tt0050083/characters/nm0625180/?ref_=tt_cst_c_16
                        - text: (uncredited)
                  - generic [ref=e582]:
                    - group [ref=e584]:
                      - img [ref=e586]
                      - button "Add John Savoca to favorite people" [ref=e588] [cursor=pointer]
                      - link "Go to John Savoca" [ref=e590]:
                        - /url: /name/nm0767847/?ref_=tt_cst_i_17
                    - generic [ref=e592]:
                      - link "John Savoca" [ref=e593]:
                        - /url: /name/nm0767847/?ref_=tt_cst_t_17
                      - generic [ref=e594]:
                        - link "The Accused" [ref=e595] [cursor=pointer]:
                          - /url: /title/tt0050083/characters/nm0767847/?ref_=tt_cst_c_17
                        - text: (uncredited)
                  - generic [ref=e596]:
                    - group [ref=e598]:
                      - img [ref=e600]
                      - button "Add Walter Stocker to favorite people" [ref=e602] [cursor=pointer]
                      - link "Go to Walter Stocker" [ref=e604]:
                        - /url: /name/nm0830818/?ref_=tt_cst_i_18
                    - generic [ref=e606]:
                      - link "Walter Stocker" [ref=e607]:
                        - /url: /name/nm0830818/?ref_=tt_cst_t_18
                      - generic [ref=e608]:
                        - link "Man Waiting for Elevator" [ref=e609] [cursor=pointer]:
                          - /url: /title/tt0050083/characters/nm0830818/?ref_=tt_cst_c_18
                        - text: (uncredited)
              - generic [ref=e610]: Director
              - link "Sidney Lumet" [ref=e612]:
                - /url: /name/nm0001486/?ref_=tt_cst_1_1
              - generic [ref=e613]: Writer
              - link "Reginald Rose" [ref=e615]:
                - /url: /name/nm0741627/?ref_=tt_cst_2_1
              - link "See full cast and crew" [ref=e616]:
                - /url: /title/tt0050083/fullcredits/?ref_=tt_cst_sm
                - text: All cast & crew
              - link "See full cast and crew" [ref=e617] [cursor=pointer]:
                - /url: /title/tt0050083/fullcredits/?ref_=tt_cst_sm
              - link "Production, box office & more at IMDbPro" [ref=e620]:
                - /url: https://pro.imdb.com/title/tt0050083/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
              - link "Production, box office & more at IMDbPro" [ref=e621] [cursor=pointer]:
                - /url: https://pro.imdb.com/title/tt0050083/?rf=cons_tt_btf_cc&ref_=cons_tt_btf_cc
            - generic [ref=e623]:
              - generic [ref=e625]:
                - link "User reviews 2.4K" [ref=e626]:
                  - /url: /title/tt0050083/reviews/?ref_=tt_ururv_sm
                  - heading "User reviews 2.4K" [level=3] [ref=e627]:
                    - generic [ref=e628]: User reviews
                    - generic [ref=e629]: 2.4K
                - button "Review" [ref=e632] [cursor=pointer]:
                  - generic [ref=e634]: Review
              - generic [ref=e635]:
                - generic [ref=e636]:
                  - generic [ref=e639]: "9.0"
                  - generic [ref=e640]: 985.2K
                - generic [ref=e642]:
                  - link "10623 1-star reviews. Select to read them." [ref=e643] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=1&ref_=tt_ururv_histo_1
                    - generic [ref=e647]: "1"
                  - link "1996 2-star reviews. Select to read them." [ref=e648] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=2&ref_=tt_ururv_histo_2
                    - generic [ref=e652]: "2"
                  - link "2408 3-star reviews. Select to read them." [ref=e653] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=3&ref_=tt_ururv_histo_3
                    - generic [ref=e657]: "3"
                  - link "3820 4-star reviews. Select to read them." [ref=e658] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=4&ref_=tt_ururv_histo_4
                    - generic [ref=e662]: "4"
                  - link "8479 5-star reviews. Select to read them." [ref=e663] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=5&ref_=tt_ururv_histo_5
                    - generic [ref=e667]: "5"
                  - link "20501 6-star reviews. Select to read them." [ref=e668] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=6&ref_=tt_ururv_histo_6
                    - generic [ref=e672]: "6"
                  - link "64299 7-star reviews. Select to read them." [ref=e673] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=7&ref_=tt_ururv_histo_7
                    - generic [ref=e677]: "7"
                  - link "182017 8-star reviews. Select to read them." [ref=e678] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=8&ref_=tt_ururv_histo_8
                    - generic [ref=e682]: "8"
                  - link "318235 9-star reviews. Select to read them." [ref=e683] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=9&ref_=tt_ururv_histo_9
                    - generic [ref=e687]: "9"
                  - link "372879 10-star reviews. Select to read them." [ref=e688] [cursor=pointer]:
                    - /url: /title/tt0050083/reviews/?rating=10&ref_=tt_ururv_histo_10
                    - generic [ref=e692]: "10"
              - heading "Featured reviews" [level=3] [ref=e695]
              - group [ref=e696]:
                - generic [ref=e697]:
                  - generic [ref=e698] [cursor=pointer]:
                    - generic [ref=e699]:
                      - link "User Smells_Like_Cheese" [ref=e701]:
                        - /url: /user/p.ssqtupaepb2pbvfb2v7udr6oc4/?ref_=tt_ururv_c_1_uname
                        - generic [ref=e702]:
                          - group [ref=e703]:
                            - generic [ref=e704]:
                              - img [ref=e706]
                              - img "Placeholder profile image" [ref=e708]
                          - generic [ref=e712]: Smells_Like_Cheese
                      - generic "Author rating is 10" [ref=e713]:
                        - generic [ref=e715]: "10"
                    - link "Terrific drama with some of the greatest actors in cinematic history" [ref=e717]:
                      - /url: /title/tt0050083/reviews/?featured=rw1557823&ref_=tt_ururv_c_1_hd
                      - heading "Terrific drama with some of the greatest actors in cinematic history" [level=3] [ref=e718]
                    - text: Gosh, I don't know how many times I studied this play and performed it in high school, not to mention how many television shows had an episode that was inspired by 12 Angry Men. It was always a great drama because of the raw human emotions that were so true and remain timeless, this play will never be dated. I couldn't wait to see this movie when I saw it at the video store and it was the first movie I slipped into the DVD player. First off, I was incredibly impressed with the credits, we not only had Henry Fonda, we had Lee J. Cobb in the cast! This movie was so well performed and such a treasure, god, I couldn't ever say any words to justify it. I've done this a million times, but here is another summary of what 12 Angry Men is all about.
                    - text: "12 jurors are about to make a decision about a murder case, over all it seems like an open and shut case with tons of evidence that would make any good man look guilty, an 18 year old boy is about to be put to death if convicted. 11 of the men vote guilty, only one vote holds them back and they have to discuss the trial once again due to one vote being not guilty. Jurour #8 refuses to just jump to conclusions and brings up incredible possibilities that can always make a man think of \"reasonable doubts\", one by one the jurors begin to see the points he is making, except for one stubborn #3 who would rather just pull the switch to the chair himself."
                    - text: 12 Angry Men is a timeless tale that could either be told very badly, i.e. 7th Heaven, or incredibly well and bring out terrific performances like Henry and Lee did. Actually, the whole cast was terrific, there wasn't a performance that was off key, movies like this are so needed in Hollywood today, it was so simple, but added so much for a 30 minute play. Please, if you have any taste, you will truly enjoy 12 Angry Men and have a great appreciation for it!
                    - text: 10/10
                  - generic [ref=e719] [cursor=pointer]:
                    - generic [ref=e720]:
                      - link "User jomipira" [ref=e722]:
                        - /url: /user/p.b2hkar6chp5khvc6p4wxglx77a/?ref_=tt_ururv_c_2_uname
                        - generic [ref=e723]:
                          - group [ref=e724]:
                            - generic [ref=e725]:
                              - img [ref=e727]
                              - img "Placeholder profile image" [ref=e729]
                          - generic [ref=e733]: jomipira
                      - generic "Author rating is 9" [ref=e734]:
                        - generic [ref=e736]: "9"
                    - link "Good script, great dialogs and a set of actors who would be the envy of the world" [ref=e738]:
                      - /url: /title/tt0050083/reviews/?featured=rw0060105&ref_=tt_ururv_c_2_hd
                      - heading "Good script, great dialogs and a set of actors who would be the envy of the world" [level=3] [ref=e739]
                    - text: "This is one of those movies where everything could go wrong. The story is as simple as it can be: 12 men are jurors on a open and shut murder trial, but one man thinks that another persons life deserves at least some thought on the matter and votes not guilty. From this point on we have 12 actors and a closed room. This could be the most boring film ever made. Lumet however is a master of mise-en-scene and provides a tense movie that keeps you locked on from the word \"go\". The dialogs are great and supported by incredibly talented actors. Joel Schumacher in Phone Booth needed to see this movie and draw a few ideas on how to make a character built, dialog driven movie. A must see for everyone."
                  - generic [ref=e740] [cursor=pointer]:
                    - generic [ref=e741]:
                      - link "User Marwan-Bob" [ref=e743]:
                        - /url: /user/p.lplso3zzynyq5bjckyoykwhxnq/?ref_=tt_ururv_c_3_uname
                        - generic [ref=e744]:
                          - group [ref=e745]:
                            - generic [ref=e747]:
                              - img "Avatar"
                          - generic [ref=e750]: Marwan-Bob
                      - generic "Author rating is 10" [ref=e751]:
                        - generic [ref=e753]: "10"
                    - link "Flawless" [ref=e755]:
                      - /url: /title/tt0050083/reviews/?featured=rw5385203&ref_=tt_ururv_c_3_hd
                      - heading "Flawless" [level=3] [ref=e756]
                    - text: Oh Boy Oh Boy, it Took me Seven years to Rewatch This Masterpiece, Damn why don't they make em like this Anymore.
                  - generic [ref=e757] [cursor=pointer]:
                    - generic [ref=e758]:
                      - link "User gcanfield-29727" [ref=e760]:
                        - /url: /user/p.kb7qwwyrwib5gychchi577maum/?ref_=tt_ururv_c_4_uname
                        - generic [ref=e761]:
                          - group [ref=e762]:
                            - generic [ref=e763]:
                              - img [ref=e765]
                              - img "Placeholder profile image" [ref=e767]
                          - generic [ref=e771]: gcanfield-29727
                      - generic "Author rating is 10" [ref=e772]:
                        - generic [ref=e774]: "10"
                    - link "The only version to see." [ref=e776]:
                      - /url: /title/tt0050083/reviews/?featured=rw5448831&ref_=tt_ururv_c_4_hd
                      - heading "The only version to see." [level=3] [ref=e777]
                    - text: In my opinion, the best movie ever made. Brilliant performances all around. A whole lot of dialogue, but you never get tired of listening. Lumet's first film-what an amazing talent. Henry Fonda and Lee J Cobb stand out, but all are excellent. There was a prior TV version, which is horrible. Lumet's version is the only one to see.
                  - generic [ref=e778] [cursor=pointer]:
                    - generic [ref=e779]:
                      - link "User TheLittleSongbird" [ref=e781]:
                        - /url: /user/p.wrufvuzoh4fg4rfvz2yqm6i4gi/?ref_=tt_ururv_c_5_uname
                        - generic [ref=e782]:
                          - group [ref=e783]:
                            - generic [ref=e785]:
                              - img "Avatar"
                          - generic [ref=e788]: TheLittleSongbird
                      - generic "Author rating is 10" [ref=e789]:
                        - generic [ref=e791]: "10"
                    - link "Brilliant, brilliant, brilliant!!" [ref=e793]:
                      - /url: /title/tt0050083/reviews/?featured=rw2262425&ref_=tt_ururv_c_5_hd
                      - heading "Brilliant, brilliant, brilliant!!" [level=3] [ref=e794]
                    - text: There are a few wonderful courtroom dramas out there, Anatomy of a Murder, To Kill a Mockingbird and Witness for the Prosecution immediately springing to mind. 12 Angry Men is so brilliant, it could very well be the definitive courtroom drama on film. Sidney Lumet's direction is masterly, and although the action takes place on one set(an actual New York drawing room) there are a huge variety of innovative camera angles and visual set-ups. The screenplay is sophisticated and smart, and the story is compelling and intelligent. The film is also brilliantly made, and the acting is superb. Henry Fonda especially dominates the film, with an integrity that makes his character so wonderful, but the other actors are wonderful as well, Ed Begley, Jack Warden, John Fiedler, Lee J Cobb, Rudy Bond et al. are all impeccable support to Fonda. Overall, brilliant courtroom drama. 10/10 Bethany Cox
            - generic [ref=e796]:
              - generic [ref=e798]:
                - heading "More like this" [level=3] [ref=e800]:
                  - generic [ref=e801]: More like this
                - link "More information" [ref=e803] [cursor=pointer]:
                  - /url: https://help.imdb.com/article/imdb/discover-watch/what-is-the-more-like-this-section/GPE7SPGZREKKY7YN?ref_=cons_tt_rec_lm
              - group [ref=e806]:
                - generic [ref=e807]:
                  - group [ref=e808]:
                    - group [ref=e809]:
                      - generic [ref=e810]:
                        - img "The Shawshank Redemption"
                      - button "Add to Watchlist" [ref=e811] [cursor=pointer]
                      - link "View title page for The Shawshank Redemption" [ref=e816]:
                        - /url: /title/tt0111161/?ref_=tt_mlt_i_1
                    - generic [ref=e818]:
                      - generic [ref=e821]: "9.3"
                      - button "Rate The Shawshank Redemption" [ref=e822] [cursor=pointer]
                    - link "View title page for The Shawshank Redemption" [ref=e825] [cursor=pointer]:
                      - /url: /title/tt0111161/?ref_=tt_mlt_t_1
                      - text: The Shawshank Redemption
                    - button "More about this" [ref=e830] [cursor=pointer]
                  - group [ref=e833]:
                    - group [ref=e834]:
                      - generic [ref=e835]:
                        - img "The Godfather"
                      - button "Add to Watchlist" [ref=e836] [cursor=pointer]
                      - link "View title page for The Godfather" [ref=e841]:
                        - /url: /title/tt0068646/?ref_=tt_mlt_i_2
                    - generic [ref=e843]:
                      - generic [ref=e846]: "9.2"
                      - button "Rate The Godfather" [ref=e847] [cursor=pointer]
                    - link "View title page for The Godfather" [ref=e850] [cursor=pointer]:
                      - /url: /title/tt0068646/?ref_=tt_mlt_t_2
                      - text: The Godfather
                    - button "More about this" [ref=e855] [cursor=pointer]
                  - group [ref=e858]:
                    - group [ref=e859]:
                      - generic [ref=e860]:
                        - img "Schindler's List"
                      - button "Add to Watchlist" [ref=e861] [cursor=pointer]
                      - link "View title page for Schindler's List" [ref=e866]:
                        - /url: /title/tt0108052/?ref_=tt_mlt_i_3
                    - generic [ref=e868]:
                      - generic [ref=e871]: "9.0"
                      - button "Rate Schindler's List" [ref=e872] [cursor=pointer]
                    - link "View title page for Schindler's List" [ref=e875] [cursor=pointer]:
                      - /url: /title/tt0108052/?ref_=tt_mlt_t_3
                      - text: Schindler's List
                    - button "More about this" [ref=e880] [cursor=pointer]
                  - group [ref=e883]:
                    - group [ref=e884]:
                      - generic [ref=e885]:
                        - img "The Godfather Part II"
                      - button "Add to Watchlist" [ref=e886] [cursor=pointer]
                      - link "View title page for The Godfather Part II" [ref=e891]:
                        - /url: /title/tt0071562/?ref_=tt_mlt_i_4
                    - generic [ref=e893]:
                      - generic [ref=e896]: "9.0"
                      - button "Rate The Godfather Part II" [ref=e897] [cursor=pointer]
                    - link "View title page for The Godfather Part II" [ref=e900] [cursor=pointer]:
                      - /url: /title/tt0071562/?ref_=tt_mlt_t_4
                      - text: The Godfather Part II
                    - button "More about this" [ref=e905] [cursor=pointer]
                  - group [ref=e908]:
                    - group [ref=e909]:
                      - generic [ref=e910]:
                        - img "Pulp Fiction"
                      - button "Add to Watchlist" [ref=e911] [cursor=pointer]
                      - link "View title page for Pulp Fiction" [ref=e916]:
                        - /url: /title/tt0110912/?ref_=tt_mlt_i_5
                    - generic [ref=e918]:
                      - generic [ref=e921]: "8.8"
                      - button "Rate Pulp Fiction" [ref=e922] [cursor=pointer]
                    - link "View title page for Pulp Fiction" [ref=e925] [cursor=pointer]:
                      - /url: /title/tt0110912/?ref_=tt_mlt_t_5
                      - text: Pulp Fiction
                    - button "More about this" [ref=e930] [cursor=pointer]
                  - group [ref=e933]:
                    - group [ref=e934]:
                      - generic [ref=e935]:
                        - img "Forrest Gump"
                      - button "Add to Watchlist" [ref=e936] [cursor=pointer]
                      - link "View title page for Forrest Gump" [ref=e941]:
                        - /url: /title/tt0109830/?ref_=tt_mlt_i_6
                    - generic [ref=e943]:
                      - generic [ref=e946]: "8.8"
                      - button "Rate Forrest Gump" [ref=e947] [cursor=pointer]
                    - link "View title page for Forrest Gump" [ref=e950] [cursor=pointer]:
                      - /url: /title/tt0109830/?ref_=tt_mlt_t_6
                      - text: Forrest Gump
                    - button "More about this" [ref=e955] [cursor=pointer]
                  - group [ref=e958]:
                    - group [ref=e959]:
                      - generic [ref=e960]:
                        - img "GoodFellas"
                      - button "Add to Watchlist" [ref=e961] [cursor=pointer]
                      - link "View title page for GoodFellas" [ref=e966]:
                        - /url: /title/tt0099685/?ref_=tt_mlt_i_7
                    - generic [ref=e968]:
                      - generic [ref=e971]: "8.7"
                      - button "Rate GoodFellas" [ref=e972] [cursor=pointer]
                    - link "View title page for GoodFellas" [ref=e975] [cursor=pointer]:
                      - /url: /title/tt0099685/?ref_=tt_mlt_t_7
                      - text: GoodFellas
                    - button "More about this" [ref=e980] [cursor=pointer]
                  - group [ref=e983]:
                    - group [ref=e984]:
                      - generic [ref=e985]:
                        - img "The Good, the Bad and the Ugly"
                      - button "Add to Watchlist" [ref=e986] [cursor=pointer]
                      - link "View title page for The Good, the Bad and the Ugly" [ref=e991]:
                        - /url: /title/tt0060196/?ref_=tt_mlt_i_8
                    - generic [ref=e993]:
                      - generic [ref=e996]: "8.8"
                      - button "Rate The Good, the Bad and the Ugly" [ref=e997] [cursor=pointer]
                    - link "View title page for The Good, the Bad and the Ugly" [ref=e1000] [cursor=pointer]:
                      - /url: /title/tt0060196/?ref_=tt_mlt_t_8
                      - text: The Good, the Bad and the Ugly
                    - button "More about this" [ref=e1005] [cursor=pointer]
                  - group [ref=e1008]:
                    - group [ref=e1009]:
                      - generic [ref=e1010]:
                        - img "One Flew Over the Cuckoo's Nest"
                      - button "Add to Watchlist" [ref=e1011] [cursor=pointer]
                      - link "View title page for One Flew Over the Cuckoo's Nest" [ref=e1016]:
                        - /url: /title/tt0073486/?ref_=tt_mlt_i_9
                    - generic [ref=e1018]:
                      - generic [ref=e1021]: "8.6"
                      - button "Rate One Flew Over the Cuckoo's Nest" [ref=e1022] [cursor=pointer]
                    - link "View title page for One Flew Over the Cuckoo's Nest" [ref=e1025] [cursor=pointer]:
                      - /url: /title/tt0073486/?ref_=tt_mlt_t_9
                      - text: One Flew Over the Cuckoo's Nest
                    - button "More about this" [ref=e1030] [cursor=pointer]
                  - group [ref=e1033]:
                    - group [ref=e1034]:
                      - generic [ref=e1035]:
                        - img "The Dark Knight"
                      - button "Add to Watchlist" [ref=e1036] [cursor=pointer]
                      - link "View title page for The Dark Knight" [ref=e1041]:
                        - /url: /title/tt0468569/?ref_=tt_mlt_i_10
                    - generic [ref=e1043]:
                      - generic [ref=e1046]: "9.1"
                      - button "Rate The Dark Knight" [ref=e1047] [cursor=pointer]
                    - link "View title page for The Dark Knight" [ref=e1050] [cursor=pointer]:
                      - /url: /title/tt0468569/?ref_=tt_mlt_t_10
                      - text: The Dark Knight
                    - button "More about this" [ref=e1055] [cursor=pointer]
                  - group [ref=e1058]:
                    - group [ref=e1059]:
                      - generic [ref=e1060]:
                        - img "Fight Club"
                      - button "Add to Watchlist" [ref=e1061] [cursor=pointer]
                      - link "View title page for Fight Club" [ref=e1066]:
                        - /url: /title/tt0137523/?ref_=tt_mlt_i_11
                    - generic [ref=e1068]:
                      - generic [ref=e1071]: "8.8"
                      - button "Rate Fight Club" [ref=e1072] [cursor=pointer]
                    - link "View title page for Fight Club" [ref=e1075] [cursor=pointer]:
                      - /url: /title/tt0137523/?ref_=tt_mlt_t_11
                      - text: Fight Club
                    - button "More about this" [ref=e1080] [cursor=pointer]
                  - group [ref=e1083]:
                    - group [ref=e1084]:
                      - generic [ref=e1085]:
                        - img "Seven"
                      - button "Add to Watchlist" [ref=e1086] [cursor=pointer]
                      - link "View title page for Seven" [ref=e1091]:
                        - /url: /title/tt0114369/?ref_=tt_mlt_i_12
                    - generic [ref=e1093]:
                      - generic [ref=e1096]: "8.6"
                      - button "Rate Seven" [ref=e1097] [cursor=pointer]
                    - link "View title page for Seven" [ref=e1100] [cursor=pointer]:
                      - /url: /title/tt0114369/?ref_=tt_mlt_t_12
                      - text: Seven
                    - button "More about this" [ref=e1105] [cursor=pointer]
            - generic [ref=e1109]:
              - link "Related interests" [ref=e1111]:
                - /url: /interest/all/?ref_=tt_rin_sm
                - heading "Related interests" [level=3] [ref=e1112]:
                  - generic [ref=e1113]: Related interests
              - group [ref=e1115]:
                - generic [ref=e1116]:
                  - generic [ref=e1117]:
                    - group [ref=e1118]:
                      - generic [ref=e1119]:
                        - img "Tom Cruise, Demi Moore, and Kevin Pollak in A Few Good Men (1992)"
                      - button "Add Legal Drama to your interests" [ref=e1120] [cursor=pointer]
                      - link "Legal Drama" [ref=e1122]:
                        - /url: /interest/in0000081/?ref_=tt_rin_in_i_1
                    - link "Legal Drama" [ref=e1124] [cursor=pointer]:
                      - /url: /interest/in0000081/?ref_=tt_rin_in_t_1
                      - generic [ref=e1125]: Legal Drama
                  - generic [ref=e1126]:
                    - group [ref=e1127]:
                      - generic [ref=e1128]:
                        - img "Jim Carrey and Kate Winslet in Eternal Sunshine of the Spotless Mind (2004)"
                      - button "Add Psychological Drama to your interests" [ref=e1129] [cursor=pointer]
                      - link "Psychological Drama" [ref=e1131]:
                        - /url: /interest/in0000086/?ref_=tt_rin_in_i_2
                    - link "Psychological Drama" [ref=e1133] [cursor=pointer]:
                      - /url: /interest/in0000086/?ref_=tt_rin_in_t_2
                      - generic [ref=e1134]: Psychological Drama
                  - generic [ref=e1135]:
                    - group [ref=e1136]:
                      - generic [ref=e1137]:
                        - img "James Gandolfini, Edie Falco, Sharon Angela, Max Casella, Dan Grimaldi, Joe Perrino, Donna Pescow, Jamie Lynn Sigler, Tony Sirico, and Michael Drayer in The Sopranos (1999)"
                      - button "Add Crime to your interests" [ref=e1138] [cursor=pointer]
                      - link "Crime" [ref=e1140]:
                        - /url: /interest/in0000052/?ref_=tt_rin_in_i_3
                    - link "Crime" [ref=e1142] [cursor=pointer]:
                      - /url: /interest/in0000052/?ref_=tt_rin_in_t_3
                      - generic [ref=e1143]: Crime
                  - generic [ref=e1144]:
                    - group [ref=e1145]:
                      - generic [ref=e1146]:
                        - img "Mahershala Ali and Alex R. Hibbert in Moonlight (2016)"
                      - button "Add Drama to your interests" [ref=e1147] [cursor=pointer]
                      - link "Drama" [ref=e1149]:
                        - /url: /interest/in0000076/?ref_=tt_rin_in_i_4
                    - link "Drama" [ref=e1151] [cursor=pointer]:
                      - /url: /interest/in0000076/?ref_=tt_rin_in_t_4
                      - generic [ref=e1152]: Drama
            - generic [ref=e1157]:
              - link "Storyline" [ref=e1158]:
                - /url: "#storyline"
                - heading "Storyline" [level=3] [ref=e1159]:
                  - generic [ref=e1160]: Storyline
              - 'button "Storyline: edit" [ref=e1164] [cursor=pointer]':
                - generic [ref=e1167]: Edit
            - generic [ref=e1169]:
              - generic [ref=e1171]:
                - heading "Did you know" [level=3] [ref=e1173]:
                  - generic [ref=e1174]: Did you know
                - 'button "Did you know: edit" [ref=e1176] [cursor=pointer]':
                  - generic [ref=e1179]: Edit
              - generic [ref=e1180]:
                - link "See more" [ref=e1181]:
                  - /url: /title/tt0050083/trivia/?ref_=tt_dyk_trv
                  - text: Trivia
                - generic [ref=e1186] [cursor=pointer]:
                  - text: Director
                  - link "Sidney Lumet" [ref=e1187]:
                    - /url: /name/nm0001486/?ref_=dyk_trv
                  - text: had the actors all stay in the same room for several hours on end and do their lines over and over without filming them. This was to give them a real taste of what it would be like to be cooped up in a room with the same people.
                - link "See more" [ref=e1188] [cursor=pointer]:
                  - /url: /title/tt0050083/trivia/?ref_=tt_dyk_trv
              - generic [ref=e1191]:
                - link "See more" [ref=e1192]:
                  - /url: /title/tt0050083/goofs/?tab=gf&ref_=tt_dyk_gf
                  - text: Goofs
                - generic [ref=e1197] [cursor=pointer]:
                  - text: Within the last half hour of the movie, the clock on the wall in the jury room can be seen indicating 6:15. Several minutes later,
                  - link "E.G. Marshall" [ref=e1198]:
                    - /url: /name/nm0550855/?ref_=dyk_gf
                  - text: states that it is "a quarter after six". Several minutes after that, the wall clock is seen again, but still shows 6:15. Still later, when
                  - link "Lee J. Cobb" [ref=e1199]:
                    - /url: /name/nm0002011/?ref_=dyk_gf
                  - text: leans over the table after he tears up the snapshot from his wallet, his watch can be seen indicating 5:10.
                - link "See more" [ref=e1200] [cursor=pointer]:
                  - /url: /title/tt0050083/goofs/?tab=gf&ref_=tt_dyk_gf
              - generic [ref=e1203]:
                - link "See more" [ref=e1204]:
                  - /url: /title/tt0050083/quotes/?ref_=tt_dyk_qu
                  - text: Quotes
                - list [ref=e1209] [cursor=pointer]:
                  - listitem [ref=e1210]:
                    - 'link "Juror #8" [ref=e1211]':
                      - /url: /name/nm0000020/?ref_=tt_dyk_qu
                    - text: ": Let me ask you this: Do you really think the boy'd shout out a thing like that so the whole neighborhood could hear him? I don't think so - he's much too bright for that."
                  - listitem [ref=e1212]:
                    - 'link "Juror #10" [ref=e1213]':
                      - /url: /name/nm0003225/?ref_=tt_dyk_qu
                    - text: ": Bright? He's a common ignorant slob. He don't even speak good English."
                  - listitem [ref=e1214]:
                    - 'link "Juror #11" [ref=e1215]':
                      - /url: /name/nm0903667/?ref_=tt_dyk_qu
                    - text: ": ["
                    - emphasis [ref=e1216]: who has a foreign accent
                    - text: "] He *doesn't* speak good English."
                - link "See more" [ref=e1217] [cursor=pointer]:
                  - /url: /title/tt0050083/quotes/?ref_=tt_dyk_qu
              - generic [ref=e1220]:
                - link "See more" [ref=e1221]:
                  - /url: /title/tt0050083/crazycredits/?tab=cz&ref_=tt_dyk_cc
                  - text: Crazy credits
                - generic [ref=e1226] [cursor=pointer]:
                  - text: At the end of the film, the actors are billed in order of their juror numbers; thus
                  - link "Henry Fonda" [ref=e1227]:
                    - /url: /name/nm0000020/?ref_=dyk_cc
                  - text: ", although the star of the film, appears 8th."
                - link "See more" [ref=e1228] [cursor=pointer]:
                  - /url: /title/tt0050083/crazycredits/?tab=cz&ref_=tt_dyk_cc
              - generic [ref=e1231]:
                - link "See more" [ref=e1232]:
                  - /url: /title/tt0050083/alternateversions/?tab=cz&ref_=tt_dyk_alt
                  - text: Alternate versions
                - generic [ref=e1237] [cursor=pointer]: The United Artists logo is plastered with black and white versions of the MGM/UA Communications Co./1987 United Artists logo in the 1990 VHS, and 1994 variant in the DVD. But in the 2008 DVD and some TV prints, it featured the colorized opening and closing MGM logos.
                - link "See more" [ref=e1238] [cursor=pointer]:
                  - /url: /title/tt0050083/alternateversions/?tab=cz&ref_=tt_dyk_alt
              - generic [ref=e1241]:
                - link "See more" [ref=e1242]:
                  - /url: /title/tt0050083/movieconnections/?ref_=tt_dyk_cnn
                  - text: Connections
                - generic [ref=e1245] [cursor=pointer]:
                  - text: Edited into
                  - link "Voskovec & Werich - paralelní osudy" [ref=e1246]:
                    - /url: /title/tt2248006/?ref_=tt_dyk_cnn
                  - text: (2012)
                - link "See more" [ref=e1247] [cursor=pointer]:
                  - /url: /title/tt0050083/movieconnections/?ref_=tt_dyk_cnn
              - generic [ref=e1250]:
                - link "See more" [ref=e1251]:
                  - /url: /title/tt0050083/soundtrack/?ref_=tt_dyk_snd
                  - text: Soundtracks
                - generic [ref=e1254] [cursor=pointer]:
                  - text: Dance of the Cuckoos
                  - generic [ref=e1255]: (uncredited)
                  - generic [ref=e1256]:
                    - text: Music by
                    - link "Marvin Hatley" [ref=e1257]:
                      - /url: /name/nm0368943/?ref_=dyk_snd
                  - generic [ref=e1258]:
                    - text: Portion whistled by
                    - link "Jack Warden" [ref=e1259]:
                      - /url: /name/nm0912001/?ref_=dyk_snd
                - link "See more" [ref=e1260] [cursor=pointer]:
                  - /url: /title/tt0050083/soundtrack/?ref_=tt_dyk_snd
            - generic [ref=e1264]:
              - generic [ref=e1265]:
                - link "Top picks" [ref=e1266]:
                  - /url: /what-to-watch/top-picks/?ref_=tt_tpks_sm
                  - heading "Top picks" [level=3] [ref=e1267]:
                    - generic [ref=e1268]: Top picks
                - generic [ref=e1270]: Sign in to rate and Watchlist for personalized recommendations
              - link "Sign in" [ref=e1271] [cursor=pointer]:
                - /url: /registration/signin?ref_=tt_tpks_signin
                - generic [ref=e1272]: Sign in
            - generic [ref=e1274]:
              - link "FAQ 20" [ref=e1276]:
                - /url: /title/tt0050083/faq/?ref_=tt_faq_sm
                - heading "FAQ 20" [level=3] [ref=e1277]:
                  - generic [ref=e1278]: FAQ
                  - generic [ref=e1279]: "20"
              - generic [ref=e1281]:
                - generic [ref=e1282] [cursor=pointer]:
                  - link "How long is 12 Angry Men?" [ref=e1284]:
                    - /url: /title/tt0050083/faq/?ref_=tt_faq_1#run-time
                  - generic [ref=e1285]: Powered by Alexa
                - link "See the answer" [ref=e1287] [cursor=pointer]:
                  - /url: /title/tt0050083/faq/?ref_=tt_faq_1#run-time
                - link "Where was the movie shot?" [ref=e1292]:
                  - /url: /title/tt0050083/faq/?ref_=tt_faq_2#fq0127878
                - link "See the answer" [ref=e1293] [cursor=pointer]:
                  - /url: /title/tt0050083/faq/?ref_=tt_faq_2#fq0127878
                - link "Are any of the actors from the jury still alive?" [ref=e1298]:
                  - /url: /title/tt0050083/faq/?ref_=tt_faq_3#fq0243695
                - link "See the answer" [ref=e1299] [cursor=pointer]:
                  - /url: /title/tt0050083/faq/?ref_=tt_faq_3#fq0243695
            - generic [ref=e1302]:
              - generic [ref=e1304]:
                - heading "Details" [level=3] [ref=e1306]:
                  - generic [ref=e1307]: Details
                - 'button "Details: edit" [ref=e1309] [cursor=pointer]':
                  - generic [ref=e1312]: Edit
              - generic [ref=e1313]:
                - link "See more" [ref=e1314]:
                  - /url: /title/tt0050083/releaseinfo/?ref_=tt_dt_rdat
                  - text: Release date
                - link "April 10, 1957 (United States)" [ref=e1316]:
                  - /url: /title/tt0050083/releaseinfo/?ref_=tt_dt_rdat
                - link "See more" [ref=e1317] [cursor=pointer]:
                  - /url: /title/tt0050083/releaseinfo/?ref_=tt_dt_rdat
                - generic [ref=e1320]: Country of origin
                - link "United States" [ref=e1322]:
                  - /url: /search/title/?country_of_origin=US&ref_=tt_dt_cnt
                - generic [ref=e1323]: Language
                - link "English" [ref=e1325]:
                  - /url: /search/title/?title_type=feature&primary_language=en&sort=moviemeter%2Casc&ref_=tt_dt_ln
                - link "See more" [ref=e1326]:
                  - /url: /title/tt0050083/releaseinfo/?ref_=tt_dt_aka#akas
                  - text: Also known as
                - generic [ref=e1327] [cursor=pointer]: 12 hombres en pugna
                - link "See more" [ref=e1328] [cursor=pointer]:
                  - /url: /title/tt0050083/releaseinfo/?ref_=tt_dt_aka#akas
                - link "See more" [ref=e1331]:
                  - /url: /title/tt0050083/locations/?ref_=tt_dt_loc
                  - text: Filming locations
                - generic [ref=e1332] [cursor=pointer]:
                  - link "New York County Courthouse - 60 Centre Street, New York City, New York, USA" [ref=e1333]:
                    - /url: /search/title/?locations=New%20York%20County%20Courthouse%20-%2060%20Centre%20Street%40%40%40%20New%20York%20City%40%40%40%20New%20York%40%40%40%20USA&ref_=tt_dt_loc
                  - text: (Exterior)
                - link "See more" [ref=e1334] [cursor=pointer]:
                  - /url: /title/tt0050083/locations/?ref_=tt_dt_loc
                - link "See more" [ref=e1337]:
                  - /url: /title/tt0050083/companycredits/?ref_=tt_dt_cmpy
                  - text: Production company
                - link "Orion-Nova Productions" [ref=e1339]:
                  - /url: /company/co0032902/?ref_=tt_dt_cmpy_1
                - link "See more" [ref=e1340] [cursor=pointer]:
                  - /url: /title/tt0050083/companycredits/?ref_=tt_dt_cmpy
                - link "See more" [ref=e1343]:
                  - /url: https://pro.imdb.com/title/tt0050083/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
                  - text: See more company credits at IMDbPro
                - link "See more" [ref=e1344] [cursor=pointer]:
                  - /url: https://pro.imdb.com/title/tt0050083/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt
            - generic [ref=e1346]:
              - generic [ref=e1348]:
                - heading "Box office" [level=3] [ref=e1350]:
                  - generic [ref=e1351]: Box office
                - 'button "Box office: edit" [ref=e1353] [cursor=pointer]':
                  - generic [ref=e1356]: Edit
              - generic [ref=e1357]:
                - generic [ref=e1358]: Budget
                - generic [ref=e1359]: $350,000 (estimated)
                - generic [ref=e1360]: Gross worldwide
                - generic [ref=e1361]: $10,438
                - generic [ref=e1362]:
                  - link "Go to IMDbPro" [ref=e1363]:
                    - /url: https://pro.imdb.com/title/tt0050083/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - img [ref=e1364]
                  - link "See detailed box office info on IMDbPro" [ref=e1374]:
                    - /url: https://pro.imdb.com/title/tt0050083/?rf=cons_tt_bo_tt&ref_=cons_tt_bo_tt
                    - text: See detailed box office info on IMDbPro
            - generic [ref=e1376]:
              - generic [ref=e1378]:
                - link "Tech specs" [ref=e1379]:
                  - /url: /title/tt0050083/technical/?ref_=tt_spec_sm
                  - heading "Tech specs" [level=3] [ref=e1380]:
                    - generic [ref=e1381]: Tech specs
                - 'button "Tech specs: edit" [ref=e1384] [cursor=pointer]':
                  - generic [ref=e1387]: Edit
              - generic [ref=e1388]:
                - generic [ref=e1389]: Runtime
                - generic [ref=e1390]: 1h 36m(96 min)
                - generic [ref=e1391]: Color
                - link "Black and White" [ref=e1393]:
                  - /url: /search/title/?colors=black_and_white&ref_=tt_spec_att
                - generic [ref=e1394]: Sound mix
                - link "Mono" [ref=e1396]:
                  - /url: /search/title/?sound_mixes=mono&ref_=tt_spec_att
                - generic [ref=e1397]: Aspect ratio
                - generic [ref=e1398]: "1.85 : 1"
            - generic [ref=e1402]:
              - generic [ref=e1403]:
                - link "Contribute to this page" [ref=e1404]:
                  - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0050083%2F
                  - heading "Contribute to this page" [level=3] [ref=e1405]:
                    - generic [ref=e1406]: Contribute to this page
                - generic [ref=e1408]: Suggest an edit or add missing content
              - generic [ref=e1409]:
                - link "Go to Learn more about contributing" [ref=e1410]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
                  - text: Learn more about contributing
                - link "Go to Learn more about contributing" [ref=e1411] [cursor=pointer]:
                  - /url: https://contribute.imdb.com/czone?ref_=tt_cn_cz
              - link "Edit page" [ref=e1415] [cursor=pointer]:
                - /url: https://contribute.imdb.com/updates?ref_=tt_cn_edt&edit=legacy%2Ftitle%2Ftt0050083%2F
                - generic [ref=e1418]: Edit page
          - generic [ref=e1419]:
            - complementary "Sponsored Content" [ref=e1422]:
              - iframe [ref=e1424]:
                - link "Sponsored Content" [ref=f9e2]:
                  - /url: https://aax-events-cell01-cf.eu-west.ono.axp.amazon-adsystem.com/x/c/RPqZD4uXszVkBGd7e23910sAAAGebgtOuwMAAADKBEFvbm9fdHhuX2JpZDMgICBvbm9fdHhuX2ltcDIgICC5ZN_n/clv1c_ek-gwXUxHdDCDDlEk0EOcivQZ2tpqhM2gqH5KEFkO2LGdjGr5nsVaL00mru2khBPQ4lob3_5cGCxK2vKaO_2Ly8VYqM05bW0aO2uCgbTY_z7ewzpIipiDoUf1pn7D7o9SclftHghoQmlg8aNZ1KveP_8mOMrNVRvmdHoKbc-jRl3dHoyD9r-QU0bJbysdUWJAKN2hGEv6hbHY6XVr-zlTHOFntaOp8jZcVXwI10lR9ls-o3i81YgqSvgDLftQtXgzCyO3p-xz1Zg_llokDrwXaJBbtI6Xx58kTpZI7JH649uTbOBq5z4WG8RmM47Zj5fpo9K0KYaHxUEW7LsMR0218e36GvHS4RC70xfovEusiodqaUB8BSRVrbeeXjZ4BTGzSjPsaqlLPgOyH7Fgodb3kNEe5M9QNorPtTIy-vpotLGCxRsU1jQ10dRmLrvS3OEZ1Ug1GG5D5jCahuP_3Vq3MBZTFZn9f22gPcYELpquEHafDz7pn8dhdlse3Z1OQGj8zkcA7RiTORYi44EFcUN0LNM3MOjVGbxfhKwDatvqBl7vpRIuqJYho2I20peOYUqTZRu0OcMEBoxpEeeo9svjGXYT35NHMHwZ7fXeC80Rh4uJ4iE6NFADF6EhOQROYLye41j2f37FWXjDXZamC7mdZsSC5j1NsdpazdMZrIfV8YyuL4TyCzv-iRd4wnz6uRdgnVTm3woklfEKgZmbUxDGqOUZcOesVLvNdE4OITfBK96xtKfl1YkXw/https://primevideo.com/detail/amzn1.dv.gti.f5b53647-e608-46ed-8228-a609fd9b2d7e/?aref=GFd2gE0K3n&ref_=dvm_crs_imd_in_s_spidernoirs1
                  - img "Sponsored Content" [ref=f9e3]
              - button "Get information, provide feedback or report sponsored ad" [ref=e1425] [cursor=pointer]: SPONSORED
            - generic [ref=e1426]:
              - heading "More to explore" [level=3] [ref=e1429]
              - generic [ref=e1431]:
                - group [ref=e1433]:
                  - group [ref=e1434]:
                    - generic [ref=e1435]:
                      - img "Production art"
                    - link "Photos" [ref=e1436]:
                      - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=tt_sw_ts_i
                      - generic [ref=e1442]: Photos
                  - generic [ref=e1444]:
                    - link "See Who's Trending on IMDb Right Now" [ref=e1445] [cursor=pointer]:
                      - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=tt_sw_ts_t
                      - generic [ref=e1446]: See Who's Trending on IMDb Right Now
                    - link "See the gallery" [ref=e1448]:
                      - /url: /imdbpicks/trending-stars/rg3677002496/mediaviewer/rm1177931266/?ref_=tt_c_sw_ts_cta
                - complementary "Sponsored Content" [ref=e1452]:
                  - iframe [ref=e1455]:
                    - generic "Text reads 'IMDb', 'FAMILY FILM NIGHT, PERFECTED.', 'Browse 40+ Timeless Hits for All Ages.', 'Find family favourites'. IMDb promotional banner featuring diverse characters including a muppet, children, and adults in period costumes against turquoise starry background with castle silhouette." [ref=f12e3]:
                      - img "Click to learn more about this sponsored product" [ref=f12e4]
                      - link "Click to learn more about this sponsored product" [ref=f12e6] [cursor=pointer]:
                        - /url: https://www.imdb.com/list/ls592567077/?ref_=imdb_1p_ada_uk_family&aref=KzyuK06AH9
                        - generic [ref=f12e7]: Click to learn more about this sponsored product
                  - button "Get information, provide feedback or report sponsored ad" [ref=e1456] [cursor=pointer]: SPONSORED
    - generic [ref=e1461]:
      - heading "Recently viewed" [level=3] [ref=e1464]
      - generic [ref=e1466]: You have no recently viewed pages
    - contentinfo [ref=e1467]:
      - link "Sign in for more access" [ref=e1469] [cursor=pointer]:
        - /url: /registration/signin/?u=%2Ftitle%2Ftt0050083%2F&ref_=tt_ftr_reg
        - generic [ref=e1470]: Sign in for more access
      - generic [ref=e1471]:
        - generic [ref=e1472]:
          - generic [ref=e1473]:
            - generic [ref=e1474]: Follow IMDb on social
            - link "TikTok" [ref=e1475] [cursor=pointer]:
              - /url: https://www.tiktok.com/@imdb
            - link "Instagram" [ref=e1477] [cursor=pointer]:
              - /url: https://instagram.com/imdb
            - link "Twitter" [ref=e1480] [cursor=pointer]:
              - /url: https://twitter.com/imdb
            - link "YouTube" [ref=e1482] [cursor=pointer]:
              - /url: https://youtube.com/imdb/
            - link "Facebook" [ref=e1484] [cursor=pointer]:
              - /url: https://facebook.com/imdb
          - generic [ref=e1486]:
            - generic [ref=e1487]:
              - generic [ref=e1488]: Get the IMDb app
              - generic [ref=e1489]: For Android and iOS
            - group [ref=e1491]:
              - generic [ref=e1492]:
                - img "Get the IMDb app"
              - link "For Android and iOS" [ref=e1493]:
                - /url: https://slyb.app.link/Aa96cLcBeAb
        - generic [ref=e1495]:
          - link "Help" [ref=e1496]:
            - /url: https://help.imdb.com/imdb
            - text: Help
          - link "Site Index" [ref=e1498]:
            - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
            - text: Site Index
          - link "IMDbPro" [ref=e1500]:
            - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
            - text: IMDbPro
          - link "Box Office Mojo" [ref=e1502]:
            - /url: https://www.boxofficemojo.com
            - text: Box Office Mojo
          - link "License IMDb Data" [ref=e1504]:
            - /url: https://developer.imdb.com/
            - text: License IMDb Data
        - generic [ref=e1506]:
          - link "Press Room" [ref=e1507]:
            - /url: /pressroom/?ref_=tt_ftr
          - link "Advertising" [ref=e1508]:
            - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
            - text: Advertising
          - link "Jobs" [ref=e1510]:
            - /url: https://www.amazon.jobs/en/teams/imdb
            - text: Jobs
          - link "Conditions of Use" [ref=e1512]:
            - /url: /conditions/?ref_=tt_ftr
          - link "Privacy Policy" [ref=e1513]:
            - /url: /privacy/?ref_=tt_ftr
          - generic [ref=e1514]:
            - link "Your Ads Privacy Choices" [ref=e1515]:
              - /url: /privacy/redirect/?ref_=tt_ftr
              - img [ref=e1516]
            - link "Your Ads Privacy Choices" [ref=e1528]:
              - /url: /privacy/redirect/?ref_=tt_ftr
      - img "IMDb, an Amazon company" [ref=e1530]
      - paragraph [ref=e1600]: © 1990-2026 by IMDb.com, Inc.
    - button "Back to top" [ref=e1601] [cursor=pointer]:
      - generic [ref=e1604]: Back to top
    - img
    - status
    - img
  - alert [ref=e1605]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('IMDb Top 250 Movies', () => {
  4   | test.beforeEach(async ({ page }) => {
  5   |   await page.goto('https://www.imdb.com/chart/top/');
  6   | });
  7   | 
  8   | test.afterEach(async ({ page }) => {
  9   |     console.log('Test completed');
  10  | });
  11  | 
  12  |   // // 1. Verify Top 250 page opens successfully
  13  |   // test('Top 250 page opens', async ({ page }) => {
  14  |   //   await expect(page).toHaveURL(/top/);
  15  |   // });
  16  | 
  17  |   // // 2. Verify movie list is displayed
  18  |   // test('Movie list is visible', async ({ page }) => {
  19  |   //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  20  |   //   await expect(movies.first()).toBeVisible();
  21  |   // });
  22  | 
  23  |   // // 3. Verify ranking numbers are visible
  24  |   // test('Ranking numbers are visible', async ({ page }) => {
  25  |   //   const rank = page.locator('h3').first();
  26  |   //   await expect(rank).toBeVisible();
  27  |   // });
  28  | 
  29  |   // // 4. Verify movie titles are displayed
  30  |   // test('Movie titles are displayed', async ({ page }) => {
  31  |   //   const title = page.locator('h3').first();
  32  |   //   await expect(title).toContainText(/\w+/);
  33  |   // });
  34  | 
  35  |   // // 5. Verify movie ratings are visible
  36  |   // test('Movie ratings are visible', async ({ page }) => {
  37  |   //   const rating = page.locator('[data-testid="ratingGroup--imdb-rating"]');
  38  |   //   await expect(rating.first()).toBeVisible();
  39  |   // });
  40  | 
  41  |   // // 6. Verify release years are shown
  42  |   // test('Release year is displayed', async ({ page }) => {
  43  |   //   const year = page.locator('.cli-title-metadata');
  44  |   //   await expect(year.first()).toBeVisible();
  45  |   // });
  46  | 
  47  |   // 7. Verify movie posters load correctly
  48  |   test('test', async ({ page }) => {
  49  |     await page.goto('https://www.imdb.com/chart/top/')
  50  |     await page.getByRole('link', { name: '12 Angry Men', exact: true }).click();
> 51  |     await expect(page.locator('img[alt="12 Angry Men"]')).toBeVisible();
      |                                                           ^ Error: expect(locator).toBeVisible() failed
  52  |   });
  53  | 
  54  | 
  55  |   // // 8. Verify clicking movie opens detail page
  56  |   // test('Open movie details page', async ({ page }) => {
  57  |   //   await page.locator('h3').first().click();
  58  |   //   await expect(page).toHaveURL(/title/);
  59  |   // });
  60  | 
  61  |   // // 9. Verify ranking order is sequential
  62  |   // test('Ranking order starts from 1', async ({ page }) => {
  63  |   //   const firstMovie = await page.locator('h3').first().textContent();
  64  |   //   expect(firstMovie).toContain('1.');
  65  |   // });
  66  | 
  67  |   // // 10. Verify ratings are valid values
  68  |   // test('Ratings are valid', async ({ page }) => {
  69  |   //   const rating = await page.locator('[data-testid="ratingGroup--imdb-rating"]').first().textContent();
  70  |   //   expect(parseFloat(rating)).toBeGreaterThan(0);
  71  |   // });
  72  | 
  73  |   // // 11. Verify search within Top 250 works
  74  |   // test('Search movie from Top 250', async ({ page }) => {
  75  |   //   await page.getByPlaceholder('Search IMDb').fill('The Dark Knight');
  76  |   //   await page.keyboard.press('Enter');
  77  |   //   await expect(page).toHaveURL(/find/);
  78  |   // });
  79  | 
  80  |   // // 12. Verify page scroll behavior
  81  |   // test('Page scroll works', async ({ page }) => {
  82  |   //   await page.mouse.wheel(0, 3000);
  83  |   //   await page.waitForTimeout(2000);
  84  |   // });
  85  | 
  86  |   // // 13. Verify page reload keeps data intact
  87  |   // test('Page reload works properly', async ({ page }) => {
  88  |   //   await page.reload();
  89  |   //   const movies = page.locator('li.ipc-metadata-list-summary-item');
  90  |   //   await expect(movies.first()).toBeVisible();
  91  |   // });
  92  | 
  93  |   // // 14. Verify no duplicate movie entries exist
  94  |   // test('No duplicate movie titles', async ({ page }) => {
  95  |   //   const titles = await page.locator('h3').allTextContents();
  96  |   //   const uniqueTitles = [...new Set(titles)];
  97  |   //   expect(titles.length).toBe(uniqueTitles.length);
  98  |   // });
  99  | 
  100 |   // // 15. Verify URL is correct after navigation
  101 |   // test('Correct URL after opening movie', async ({ page }) => {
  102 |   //   await page.locator('h3').nth(1).click();
  103 |   //   await expect(page.url()).toContain('/title/');
  104 |   // });
  105 | 
  106 | });
```