<template>
  <div>
    <svg
      :style="{
        pointerEvents: onFirstItem ? 'none' : 'auto',
        cursor: isOnLastItem ? 'auto' : 'pointer'
      }"
      @click="changeFullPageClick('previous', 'frombtn', false)"
      class="up-arrow"
      width="39"
      height="25"
      viewBox="0 0 39 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 -1.2214e-06L-6.84596e-07 25C-6.84596e-07 25 11.729 20.7483 19.5 20.7483C27.271 20.7483 39 25 39 25L19.5 -1.2214e-06Z"
        :fill="onFirstItem ? '#6F747E20' : '#aee5fa'"
      />
    </svg>
    <svg
      :style="{
        pointerEvents: isOnLastItem ? 'none' : 'auto',
        cursor: isOnLastItem ? 'auto' : 'pointer'
      }"
      @click="changeFullPageClick('next', 'frombtn', false)"
      class="down-arrow"
      width="39"
      height="25"
      viewBox="0 0 39 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 25L39 -8.48791e-06C39 -8.48791e-06 27.271 4.25169 19.5 4.25169C11.729 4.2517 -4.65639e-06 -1.66893e-06 -4.65639e-06 -1.66893e-06L19.5 25Z"
        :fill="isOnLastItem ? '#6F747E20' : '#aee5fa'"
      />
    </svg>

    <div class="container y mandatory-scroll-snapping" ref="container">
      <section class="fullscreen-0" ref="fullscreen0">
        <div class="screen-0">
          <div
            :style="topMarginStyles"
            :class="
              initialHeaderStyle ? 'fullscreen-content' : 'initial-desktop'
            "
          >
            <article ref="animate0">
              <div class="first-page-header">
                <h1>SKILLS & INFO</h1>
              </div>

              <div class="quote">
                Hard working and creative person with a keen eye for details
              </div>
              <!-- <a
                href="https://github.com/tjn06/portfolio/raw/main/assets/johnsson-tobias-cv.pdf"
                ><span class="quote">Download my CV ( PDF )</span
                ><img
                  :style="{
                    height: '10px',
                    'margin-left': '8px',
                    'margin-top': '2px'
                  }"
                  src="/assets/arrow-btn-forward.svg"
              /></a> -->

              <a
                href="https://github.com/tjn06"
                target="_blanc"
                class="sub-header-container"
              >
                <span class="check">Visit my github for more projects</span>
                <img
                  :style="{ width: '20px', 'margin-left': '8px' }"
                  src="/assets/git-icon.svg"
                />
                <img
                  :style="{
                    height: '10px',
                    'margin-left': '8px',
                    'margin-top': '2px'
                  }"
                  src="/assets/arrow-btn-forward.svg"
                />
              </a>

              <ul
                class="flex-container wrap"
                :style="
                  initialHeaderStyle
                    ? { 'margin-bottom': '2vh', 'margin-top': '1rem' }
                    : { 'margin-bottom': '0vh', 'margin-top': '3.5rem' }
                "
              >
                <li class="flex-item">SwiftUI/UIKit</li>
                <li class="flex-item">React Native</li>
                <li class="flex-item">XCode</li>
                <li class="flex-item">Android Studio</li>
                <li class="flex-item">Javascript</li>
                <li class="flex-item">Vue</li>
                <li class="flex-item">React</li>
                <li class="flex-item">Next</li>
                <li class="flex-item">Redux</li>
                <li class="flex-item">Git</li>
                <li class="flex-item">Scrum</li>
                <li class="flex-item">Agile methods</li>
                <li class="flex-item">Prototypes</li>
                <li class="flex-item">Jira</li>
                <li class="flex-item">Figma</li>
                <li class="flex-item">Illustrator</li>
                <li class="flex-item">Photoshop</li>
                <li class="flex-item">E-mail-templates</li>
                <li class="flex-item">Flex/grid</li>
                <li class="flex-item">Ajax</li>
                <li class="flex-item">Axios</li>
                <li class="flex-item">MERN-stack</li>
                <li class="flex-item">JAVA</li>
                <li class="flex-item">Typescript</li>
                <li class="flex-item">HTML/CSS</li>
                <li class="flex-item">MongoDB</li>
                <li class="flex-item">SQL</li>
                <li class="flex-item">Firebase</li>
                <li class="flex-item">Java</li>
              </ul>

              <div
                class="skills"
                :style="
                  initialHeaderStyle
                    ? { 'margin-bottom': '8vh', 'margin-top': '2.8rem' }
                    : { 'margin-bottom': '8vh', 'margin-top': '2.3rem' }
                "
              >
                <div class="skill-item-container">
                  <span class="skill-title">FAVOURITES</span>
                  <div class="skill-item-flex">
                    <img
                      src="/assets/react-icon.svg"
                      :style="{ height: '25px', opacity: '0.7' }"
                    />
                    <img
                      src="/assets/vue-icon.svg"
                      :style="{ height: '25px', opacity: '0.7' }"
                    />
                    <img
                      src="/assets/css-icon.svg"
                      :style="{ height: '25px', opacity: '0.7' }"
                    />
                    <img
                      src="/assets/swift-icon.svg"
                      :style="{ height: '25px', opacity: '0.7' }"
                    />
                  </div>
                </div>

                <div class="skill-item-container">
                  <span class="skill-title">CROSS PLATFORM</span>
                  <div class="skill-item-flex">
                    <img
                      src="/assets/mobile-icon.svg"
                      :style="{ height: '25px', opacity: '0.7' }"
                    />
                    <img
                      src="/assets/desktop-icon.svg"
                      :style="{ height: '25px', opacity: '0.7' }"
                    />
                    <img
                      src="/assets/screen-icon.svg"
                      :style="{ height: '25px', opacity: '0.7' }"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section ref="fullscreen1">
        <div class="screen-1">
          <div :style="topMarginStyles" :class="'fullscreen-content'">
            <article class="initial-hidden" ref="animate1">
              <div class="top-header-container">
                <h1 style="margin-bottom: 5px">EXPERIENCES</h1>

                <div
                  @click="
                    () => (this.latestExperiences = !this.latestExperiences)
                  "
                  class="forward-back-btn"
                >
                  <img
                    v-if="!latestExperiences"
                    :style="{ height: '11px', 'margin-right': '8px' }"
                    src="/assets/arrow-btn-back.svg"
                  />
                  <span v-if="latestExperiences">MORE</span>
                  <span v-else>BACK</span>
                  <img
                    v-if="latestExperiences"
                    :style="{ height: '12px', 'margin-left': '8px' }"
                    src="/assets/arrow-btn-forward.svg"
                  />
                </div>
              </div>
              <a
                href="https://github.com/tjn06"
                target="_blanc"
                class="sub-header-container"
              >
                <span class="check">Visit my github for more projects</span>
                <img
                  :style="{ width: '20px', 'margin-left': '8px' }"
                  src="/assets/git-icon.svg"
                />
                <img
                  :style="{
                    height: '12px',
                    'margin-left': '8px',
                    'margin-top': '2px'
                  }"
                  src="/assets/arrow-btn-forward.svg"
                />
              </a>
              <Transition name="fade">
                <ul v-if="latestExperiences">
                  <li>
                    <span>Front End Developer </span
                    ><span class="extra-intern"> *EMPLOYMENT </span>
                    <div class="date">aug. 2023–mars. 2025</div>
                    <div class="tasks"><a href="https://digifidevelopment.se/" target="_blanc">Digifi Development</a></div>
                  </li>
                  <li>
                    <span>Mobile App Developer </span
                    ><span class="extra-intern"> *INTERNSHIP </span>
                    <div class="date">jan. 2023–may. 2023</div>
                    <div class="tasks">My Popina</div>
                  </li>
                  <li>
                    <span>Mobile App Developer </span
                    ><span class="extra-intern"> *INTERNSHIP </span>
                    <div class="date">sep. 2022–nov. 2022</div>
                    <div class="tasks">ICT Scandinavia</div>
                  </li>
                  <li>
                    <span>App Dev iPhone, Android </span
                    ><span class="extra-edu"> *EDUCATION</span>
                    <div class="date">aug. 2021–jun. 2023</div>
                    <div class="tasks">
                      <a href="https://www.iths.se" target="_blanc"
                        >IT-Högskolan</a
                      >
                    </div>
                  </li>
                  <li>
                    <span>Front End Developer </span
                    ><span class="extra-intern"> *INTERNSHIP </span>
                    <div class="date">feb. 2021–may. 2021</div>
                    <div class="tasks">KVD bil</div>
                  </li>
                </ul>
              </Transition>
              <Transition name="fade">
                <ul v-if="!latestExperiences">
                  <li>
                    <span>Front End Developer </span
                    ><span class="extra-intern"> *INTERNSHIP </span>
                    <div class="date">oct. 2020–dec. 2020</div>
                    <div class="tasks">Oljemagasinet</div>
                  </li>
                  <li>
                    <span> Front End Developer </span
                    ><span class="extra-intern"> *EDUCATION</span>
                    <div class="date">sep. 2019–jun. 2021</div>
                    <div class="tasks">NBI/Handelsakademin(EC)</div>
                  </li>
                </ul>
              </Transition>
            </article>
          </div>
        </div>
      </section>
      <section ref="fullscreen2">
        <div class="screen-2">
          <div :style="topMarginStyles" :class="'fullscreen-content'">
            <article class="initial-hidden" ref="animate2">
              <div class="top-header-container">
                <h1 style="margin-bottom: 5px">WEB PROJECTS</h1>
                <!--               <h1 v-if="latestProjects" style="margin-bottom: 5px">WEB PROJECTS</h1>
              <h1 v-else style="margin-bottom: 5px">OLD PROJECTS</h1> -->
                <div
                  @click="() => (this.latestProjects = !this.latestProjects)"
                  class="forward-back-btn"
                >
                  <img
                    v-if="!latestProjects"
                    :style="{ height: '11px', 'margin-right': '8px' }"
                    src="/assets/arrow-btn-back.svg"
                  />
                  <span v-if="latestProjects">OLD</span>
                  <span v-else>LATEST</span>
                  <img
                    v-if="latestProjects"
                    :style="{ height: '12px', 'margin-left': '8px' }"
                    src="/assets/arrow-btn-forward.svg"
                  />
                </div>
              </div>
              <a
                href="https://github.com/tjn06"
                target="_blanc"
                class="sub-header-container"
              >
                <span class="check">Visit my github for more projects</span>
                <img
                  :style="{ width: '20px', 'margin-left': '8px' }"
                  src="/assets/git-icon.svg"
                />
                <img
                  :style="{
                    height: '12px',
                    'margin-left': '8px',
                    'margin-top': '2px'
                  }"
                  src="/assets/arrow-btn-forward.svg"
                />
              </a>
              <Transition name="fade">
                <ul v-if="latestProjects">
                  <li>
                    <div class="separator">
                      <div>
                        <span>
                          <a
                            href="https://timata2022.github.io/#/"
                            target="_blank"
                            >Timata<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg"
                            />
                          </a>
                        </span>
                        <span class="extra-intern"> *IN PROGRESS </span>
                      </div>
                      <a
                        href="https://github.com/ehildingg/workout-app"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">VUE</div>
                    <div class="tasks">Workout-app</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://tjn06.github.io/nhl-stats-webapp/#/"
                            target="_blank"
                            >JUST NHL STATS<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"></span>
                      </div>
                      <a href="https://github.com/tjn06/nhl-stats-webapp" target="_blank">
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">VUE</div>
                    <div class="tasks">NHL player stats</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://lackraklor.vercel.app/"
                            target="_blank"
                            >Läckra Klor<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"> *IN PROGRESS </span>
                      </div>
                      <a
                        href="https://github.com/tjn06/lackraklor"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">NEXT.JS</div>
                    <div class="tasks">Nail saloon</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://tjn06.github.io/skiguide-webapp/"
                            target="_blank"
                            >SKI-GUIDE<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"></span>
                      </div>
                      <a href="https://github.com/tjn06/skiguide-webapp" target="_blank">
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">REACT</div>
                    <div class="tasks">Guide to choosing ski length</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://tjn06.github.io/cities-api/"
                            target="_blank"
                            >Cities-API<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"></span>
                      </div>
                      <a
                        href="https://github.com/tjn06/cities-api"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">VUE</div>
                    <div class="tasks">Api-requests. GET,POST,PUT,DELETE</div>
                  </li>
                </ul>
              </Transition>
              <Transition name="fade">
                <ul v-if="!latestProjects">
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://hannamollergren.github.io/Projektarbete-HTML-CSS/"
                            target="_blank"
                            >ISS<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"></span>
                      </div>
                      <a
                        href="https://github.com/tjn06/Projektarbete-HTML-CSS"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">VANILLA JS</div>
                    <div class="tasks">Fantasy space-shop</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://tjn06.github.io/Starwars/"
                            target="_blank"
                            >STARWARS database<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"></span>
                      </div>
                      <a
                        href="https://github.com/tjn06/Starwars"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">REACT</div>
                    <div class="tasks">Starwars data</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://agustin-martinez.github.io/GameOfGlenn/"
                            target="_blank"
                            >Game of Glenn<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"></span>
                      </div>
                      <a
                        href="https://github.com/tjn06/GameOfGlenn"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">REACT</div>
                    <div class="tasks">Fantasy-world with characters</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://tjn06.github.io/library/"
                            target="_blank"
                            >CMS drag and drop<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"> *IN PROGRESS </span>
                      </div>
                      <a
                        href="https://github.com/tjn06/library"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">REACT</div>
                    <div class="tasks">Redigera/edit on/off in bottom</div>
                  </li>
                  <li>
                    <div class="separator">
                      <div>
                        <span
                          ><a
                            href="https://tjn06.github.io/codesnippets/"
                            target="_blank"
                            >Coding-snippets<img
                              :style="{
                                height: '10px',
                                margin: '2px 4px 0 4px'
                              }"
                              src="/assets/arrow-btn-forward.svg" /></a
                        ></span>
                        <span class="extra-intern"></span>
                      </div>
                      <a
                        href="https://github.com/tjn06/codesnippets"
                        target="_blank"
                      >
                        <img
                          :style="{ width: '15px' }"
                          src="/assets/git-icon.svg"
                        />
                        <img
                          :style="{ height: '14px', margin: '0px 0 0 4px' }"
                          src="/assets/arrow-btn-forward.svg"
                        />
                      </a>
                    </div>
                    <div class="date">VUE</div>
                    <div class="tasks">
                      Add, report, delete, vote on snippets
                    </div>
                  </li>
                </ul>
              </Transition>
            </article>
          </div>
        </div>
      </section>
      <section ref="fullscreen3">
        <div class="screen-3">
          <div :style="topMarginStyles" :class="'fullscreen-content'">
            <article class="initial-hidden" ref="animate3">
              <div class="top-header-container">
                <h1 v-if="appAndOtherProjects" style="margin-bottom: 5px">
                  APP PROJECTS
                </h1>
                <h1 v-else style="margin-bottom: 5px">OTHER PROJECTS</h1>
                <div
                  @click="
                    () => (this.appAndOtherProjects = !this.appAndOtherProjects)
                  "
                  class="forward-back-btn"
                >
                  <img
                    v-if="!appAndOtherProjects"
                    :style="{ height: '11px', 'margin-right': '8px' }"
                    src="/assets/arrow-btn-back.svg"
                  />
                  <span v-if="appAndOtherProjects">OTHER</span>
                  <span v-else>APP</span>
                  <img
                    v-if="appAndOtherProjects"
                    :style="{ height: '11px', 'margin-left': '8px' }"
                    src="/assets/arrow-btn-forward.svg"
                  />
                </div>
              </div>
              <a
                href="https://github.com/tjn06"
                target="_blanc"
                class="sub-header-container"
              >
                <span class="check">Visit my github for more projects</span>
                <img
                  :style="{ width: '20px', 'margin-left': '8px' }"
                  src="/assets/git-icon.svg"
                />
                <img
                  :style="{
                    height: '10px',
                    'margin-left': '8px',
                    'margin-top': '2px'
                  }"
                  src="/assets/arrow-btn-forward.svg"
                />
              </a>
              <Transition name="fade">
                <ul v-if="appAndOtherProjects">
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/justnhlstats"
                      target="_blank"
                    >
                      <span>Just NHL stats</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">REACT NATIVE/CROSSPLATFORM</div>
                    <div class="tasks">NHL-player stats</div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/EducationSwiftUI"
                      target="_blank"
                    >
                      <span>Westcoast education 1.1</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">SWIFT/UI</div>
                    <div class="tasks">Simple app, lists, images</div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/Westcoast-Education"
                      target="_blank"
                    >
                      <span>Westcoast education 1.0 </span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">SWIFT</div>
                    <div class="tasks">Simple app, lists, images</div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/Moriawe/Smultronstallen"
                      target="_blank"
                    >
                      <span>Smultronställen</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">ANDROID/JAVA</div>
                    <div class="tasks">Find, add, delete places on map</div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/Hangman"
                      target="_blank"
                    >
                      <span>Hangman</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">ANDROID/JAVA</div>
                    <div class="tasks">Simple hangman-game</div>
                  </li>
                </ul>
              </Transition>
              <Transition name="fade">
                <ul v-if="!appAndOtherProjects">
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/dice-game-java"
                      target="_blank"
                    >
                      <span>Dice-game</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">JAVA</div>
                    <div class="tasks">Text based dice-game</div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/fantasy-game-java"
                      target="_blank"
                    >
                      <span>Fantasy-game</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">JAVA</div>
                    <div class="tasks">Text based adventure</div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/database"
                      target="_blank"
                    >
                      <span>Database-stuff</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">MONGODB/SQL</div>
                    <div class="tasks">
                      Mongodb-querys, SQL-querys, EA-diagram
                    </div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://www.figma.com/file/pi2b7jXMMV9jm4FPiRoHB9/EEZER?node-id=0%3A1"
                      target="_blank"
                    >
                      <span>Ezeer Prototype</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">Figma</div>
                    <div class="tasks">Prototype/wirefram figma</div>
                  </li>
                  <li>
                    <a
                      class="items-row"
                      href="https://github.com/tjn06/Boatshop"
                      target="_blank"
                    >
                      <span>Boatshop</span>
                      <img
                        :style="{ width: '15px', margin: '0px 5px 0 5px' }"
                        src="/assets/git-icon.svg"
                      />
                      <img
                        :style="{ height: '12px', margin: '0px 0px 0 0px' }"
                        src="/assets/arrow-btn-forward.svg"
                      />
                    </a>
                    <div class="date">MONGODB/VANILLA-JS</div>
                    <div class="tasks">MongoDB with frontend</div>
                  </li>
                </ul>
              </Transition>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        fullScreenIndex: 0,
        carouselPositions: null,
        fullScreenContainer: 0,
        onFirstItem: true,
        iUpdate: null,
        isOnLastItem: false,
        clickMove: false,
        timeOutValue: null,
        direction: 'next',
        windowInnerWidth: 0,
        latestProjects: true,
        latestExperiences: true,
        appAndOtherProjects: true
      }
    },
    watch: {
      currentItem(newValue, oldValue) {
        this.initialHeaderStyleOnce()
      },
      fromNav(newValue, oldValue) {
        if (newValue.fromNav) {
          this.changeFullPageClickFromNav(newValue.itemIndex)
        }
      }
    },
    methods: {
      initialHeaderStyleOnce() {
        if (!this.initialHeaderStyle)
          this.$store.commit('changeHeaderStyleOnce')
      },
      /*       changeHeaderStyleOnce() {
        console.log('Changed initialHeaderStyle once')
        this.initialHeaderStyle = true
      }, */
      getWindowWidth() {
        /* console.log('muu', window.innerWidth) */
        this.windowInnerWidth = window.innerWidth
      },
      getFullPagePositions() {
        let positionsArr = []
        for (const property in this.$refs) {
          if (property.includes('fullscreen')) {
            positionsArr.push([
              this.$refs[property].offsetTop,
              this.$refs[property].offsetTop + this.$refs[property].offsetHeight
            ])
          }
        }
        this.fullScreenContainer = this.$refs.container.offsetHeight - 1
        this.carouselPositions = positionsArr
      },

      getFullPageElements() {
        let fullscreenElArr = []
        Object.keys(this.$refs).forEach((el) => {
          if (el.includes('animate')) {
            fullscreenElArr.push(this.$refs[el])
          }
        })
        // console.log('fullscreenElArr', fullscreenElArr)
        return fullscreenElArr
      },

      changeFullPageClickFromNav(itemIndex) {
        clearTimeout(this.timeOutValue)
        this.clickMove = true
        this.$store.commit('changeCurrentItem', itemIndex)
        let test = this.getFullPageElements()
        if (test[itemIndex].classList.value != 'animateup') {
          test[itemIndex].classList.value = 'animateup'
        }
        this.scrollTo(itemIndex)
        // console.log('caruselpos', this.carouselPositions)

        this.disableBtnsHandler(itemIndex)

        this.timeOutValue = setTimeout(() => {
          this.clickMove = false
        }, 1000)
      },

      changeFullPageClick(direction) {
        clearTimeout(this.timeOutValue)
        this.clickMove = true

        let currentScrollTop = this.$refs.container.scrollTop
        let ifToScrollPosition = currentScrollTop + this.fullScreenContainer

        for (let i = 0; i < this.carouselPositions.length; i++) {
          if (
            ifToScrollPosition > this.carouselPositions[i][0] &&
            ifToScrollPosition < this.carouselPositions[i][1]
          ) {
            /* this.currentItem = i */
            if (
              direction === 'next' &&
              this.currentItem <= this.carouselPositions.length - 1
            ) {
              /* this.currentItem++ */
              this.$store.commit('changeCurrentItem', this.currentItem + 1)
              // console.log('plus', this.currentItem)
              let test = this.getFullPageElements()
              // console.log('test', test[1])

              if (
                test[this.currentItem].classList.value != 'animateup' &&
                this.currentItem != 0
              ) {
                test[this.currentItem].classList.value = 'animateup'
              }
              this.scrollTo(this.currentItem)
              // console.log('caruselpos', this.carouselPositions)
            } else if (direction === 'previous' && this.currentItem >= 0) {
              /* this.currentItem-- */
              this.$store.commit('changeCurrentItem', this.currentItem - 1)
              // console.log('minus', this.currentItem)
              this.scrollTo(this.currentItem)
              // console.log('caruselpos', this.carouselPositions)
              let test = this.getFullPageElements()
              // console.log('test', test)
              if (
                test[this.currentItem].classList.value != 'animateup' &&
                this.currentItem != 0
              ) {
                test[this.currentItem].classList.value = 'animateup'
              }
            }
            this.disableBtnsHandler(this.currentItem)
          }
        }
        this.timeOutValue = setTimeout(() => {
          this.clickMove = false
        }, 800)
      },

      changeFullPageScroll(direction) {
        // console.log('clickmove')
        if (!this.clickMove) {
          // console.log('direction', direction)
          let currentScrollTop = this.$refs.container.scrollTop
          let ifToScrollPosition = currentScrollTop + this.fullScreenContainer

          for (let i = 0; i < this.carouselPositions.length; i++) {
            if (
              ifToScrollPosition > this.carouselPositions[i][0] &&
              ifToScrollPosition < this.carouselPositions[i][1]
            ) {
              // this.currentItem = i
              // if (this.iUpdate != i) {
              this.$store.commit('changeCurrentItem', i)
              let test = this.getFullPageElements()
              // console.log('test', test)
              if (
                test[this.currentItem].classList.value !== 'animateup' &&
                this.currentItem != 0
              ) {
                test[this.currentItem].classList.value = 'animateup'
                /*       for (let j = 0; j < this.currentItem; i++) {
                  test[j].classList.value = 'animateup'
                } */
              }
              this.iUpdate = this.currentItem
              // }
              this.disableBtnsHandler(this.currentItem)
            }
          }
        }
      },

      disableBtnsHandler(currentItem) {
        this.isOnLastItem = false
        this.onFirstItem = false
        if (currentItem >= this.carouselPositions.length - 1) {
          this.isOnLastItem = true
        }
        if (currentItem <= 0) {
          this.onFirstItem = true
        }
      },

      scrollTo(currentItem) {
        this.$refs.container.scrollTo({
          top: this.carouselPositions[currentItem][0],
          behavior: 'smooth'
        })
      },
      scrollHandler(e) {
        // Clear our timeout throughout the scroll

        window.clearTimeout(this.isScrolling)

        // Set a timeout to run after scrolling ends
        this.isScrolling = setTimeout(() => {
          let newScrollValue = this.$refs.container.scrollTop
          if (this.oldScrollValue - newScrollValue < 0) {
            this.direction = 'next'
          } else if (this.oldScrollValue - newScrollValue > 0) {
            this.direction = 'previous'
          }

          this.oldScrollValue = newScrollValue

          this.changeFullPageScroll(this.direction)
        }, 20)
      }
    },
    computed: {
      currentItem() {
        return this.$store.state.currentItem
      },
      fromNav() {
        return this.$store.state.fromNavObj
      },
      initialHeaderStyle() {
        return this.$store.state.initialHeaderStyle
      },
      topMarginStyles() {
        if (this.initialHeaderStyle) {
          if (this.windowInnerWidth <= 790) {
            return {
              'margin-top': '12vh'
              /* color: 'blue' */
            }
          } else {
            return {
              'margin-top': '20vh'
              /* color: 'blue' */
            }
          }
        } else {
          if (this.windowInnerWidth <= 790) {
            return {
              'margin-top': '18vh'
              /* color: 'red' */
            }
          } else {
            return {
              // 'padding-top': this.logoFromTop + 'px',
              'margin-top': '15vh',
              'padding-top': '65px'
              /* color: 'red' */
            }
          }
        }
      }
    },
    mounted() {
      this.getFullPageElements()
      this.getFullPagePositions()

      window.addEventListener('resize', this.getFullPagePositions)
      this.$refs.container.addEventListener('scroll', this.scrollHandler, false)
    },
    created() {
      this.windowInnerWidth = window.innerWidth
      window.addEventListener('resize', this.getWindowWidth)
    },
    destroyed() {
      window.removeEventListener('resize', this.getFullPagePositions)
      window.removeEventListener('resize', this.getWindowWidth)
      this.$refs.container.removeEventListener(
        'scroll',
        this.scrollHandler,
        false
      )
    }
  }
</script>

<style scoped>
  .fade-enter-active {
    transition: opacity 1s ease;
  }
  .fade-leave-active {
    display: none;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0.1;
  }
  article {
  }
  .quote {
    margin-top: 2px;
    /* color: rgb(170, 152, 225); */
    font-family: 'Shadows Into Light', cursive;
  }
  .skills {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    /* margin-bottom: 6vh; */
  }
  .skill-item-container {
    display: flex;
    flex-direction: column;
  }
  .skill-title {
    /* color: rgb(170, 152, 225); */
    font-size: 0.7rem;
    margin-bottom: 0.7em;
  }
  .skill-item-flex {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }
  .flex-item {
    background: tomato;
    padding: 7px;
    margin: 5px 5px 5px 0px;
    line-height: 5px;
    color: white;
    font-weight: bold;
    font-size: 0.7em;
    text-align: center;
    border-radius: 2px;
  }
  .flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }

  .wrap {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .wrap li {
    background: rgba(144, 144, 144, 0.283);
  }
  .wrap li:hover {
    opacity: 1;
    background: rgba(144, 144, 144, 0.283);
  }

  .check {
    font-family: 'Shadows Into Light', cursive;
  }
  .centering {
    align-items: center;
  }
  .forward-back-btn {
    font-size: 12px;
    color: #aee5fa;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .top-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .separator {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .items-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .sub-header-container {
    display: flex;
    align-items: center;
    margin-bottom: 6vh;
  }
  .first-page-header {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .extra-intern {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    color: rgb(170, 152, 225);
    font-family: 'League Spartan', sans-serif;
  }
  .extra-edu {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    color: rgb(170, 152, 225);
    font-family: 'League Spartan', sans-serif;
  }
  .location-date {
    border-bottom: 1px solid rgba(128, 128, 128, 0.251);
  }
  .location {
    font-size: 15px;
    color: rgb(211, 211, 211);
  }
  .date {
    font-size: 13px;
    color: rgb(150, 150, 150);
  }

  .tasks {
    font-size: 15px;
    color: rgb(211, 211, 211);
    padding-top: 2px;
    margin-bottom: 5px;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.251);
  }

  .tasks > a {
    color: rgb(211, 211, 211);
    text-decoration: none;
  }
  .tasks > a:hover {
    color: white;
    text-decoration: none;
  }

  nav {
    text-align: right;
    font-size: 13px;
    position: fixed;
    z-index: 10;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0.5rem;
    background-color: gray;
    justify-content: center;
  }
  .nav-content {
    display: flex;
    gap: 2vw;
  }
  .nav-design {
    display: grid;
  }
  .nav-item-column {
    display: flex;
  }
  .nav-title {
    display: flex;
    align-self: center;
  }
  .nav-active {
    color: rgb(0, 255, 72);
  }
  .nav-unactive {
    color: rgb(60, 26, 26);
  }

  .top-header-container > h1 {
    font-size: clamp(
      1rem,
      7vw,
      2rem
    );
  }

  @media (min-width: 580px) {
    nav {
      width: unset;
      border-top-left-radius: 40px;
      text-align: right;
      font-size: 13px;
      position: fixed;
      z-index: 10;
      /* bottom: calc(1vh); */
      /* left: 10vw; */
      right: 0;
      display: flex;
      padding: 1rem 1rem 1rem 3rem;
    }
    .nav-content {
      display: flex;
      gap: 10px;
    }
    .nav-item-column {
      display: flex;
    }
    .nav-title {
      display: flex;
      align-self: center;
    }
    .top-header-container > h1 {
      font-size: 2rem;
    }
  }

  .screen-0,
  .screen-1,
  .screen-2,
  .screen-3 {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .screen-0,
  .screen-1,
  .screen-2,
  .screen-3 {
    font-size: 1rem;
  }
  .screen-1::before {
    content: '';
    /* background-image: url('/assets/building1.jpeg'); */
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: 50% 0;
    background-size: cover;
    /* background-position: center; */
    /* background-position: bottom; */
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }

  .screen-2::before {
    content: '';
    /* background-image: url('/assets/design.jpg'); */
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: 50% 0;
    background-size: cover;
    /* background-position: center; */
    /* background-position: bottom; */
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }
  .background-1 {
    /* background-image: url('/assets/914A2839.jpeg'); */
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
  .initial-hidden {
    opacity: 0;
  }
  .hide-el {
    position: relative;
    opacity: 0;
  }
  .animateup {
    position: relative;
    animation: pulseup 0.5s ease;
  }
  .animateup2 {
    position: relative;
    animation: pulseup 0.2s ease;
  }

  @keyframes pulseup {
    0% {
      opacity: 0;
      /* transform: scale(0); */
    }
    47% {
      opacity: 0;
    }
    70% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
      /* transform: scale(1); */
    }
  }

  .fullscreen-content {
    margin-left: auto;
    margin-right: auto;

    padding: 20px 5px 2px 5px;
    border-radius: 5px;
    text-align: left;
    /* max-width: 896px; */
    max-width: 550px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .initial-desktop {
    /*  margin-left: 40%; */
    /* max-width: 896px; */
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    /* max-width: 700px; */
    max-width: 550px;
    /* padding-right: 1rem; */
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .initial-desktop h1 {
    text-align: left;
  }
  .fullscreen-content h1 {
    text-align: left;
  }
  h1 {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
    letter-spacing: 5px;
  }
  .holster {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column nowrap;
  }
  .container {
    display: flex;
    /* overflow: auto; */
    overflow-y: scroll; /* Add the ability to scroll */
    flex: none;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  #container section {
    scroll-snap-align: start;
  }
  .container.y {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
  .y.mandatory-scroll-snapping {
    scroll-snap-type: y mandatory;
  }
  .container > section {
    scroll-snap-align: start;
    /* text-align: center; */
    scroll-snap-align: center;
    flex: none;
  }
  .y.container > section {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    font-size: 18px;
    width: 100%;
    height: 100%;
  }
  /* appearance fixes */

  /* coloration */
  /* .container > div:nth-child(even) {
    background-color: #87ea87;
  }

  .container > div:nth-child(odd) {
    background-color: #87ccea;
  } */
  .stat-stuff {
    position: fixed;
    z-index: 10;
    top: 70px;
    /*  background: rgba(0, 128, 0, 0.167); */
    height: 20px;
    width: 100%;
  }

  .down-arrow {
    position: fixed;
    z-index: 10;
    bottom: 70px;
    right: 25px;
    /* bottom: 40px;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    height: 15px;
  }
  .up-arrow {
    position: fixed;
    z-index: 10;
    bottom: 70px;
    left: 25px;

    /* top: 50px;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    height: 15px;
  }
  .item {
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    /*   height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  }
  .fullpage {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .a {
    background-color: lime;
  }
  .b {
    background-color: aqua;
  }
  .c {
    background-color: blueviolet;
  }

  @media (min-width: 790px) {
    .up-arrow {
      top: 90px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .down-arrow {
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .fullscreen-content {
      /* color: green; */
      text-align: left;
      margin-left: 23vw;
      max-width: 700px;
      padding-right: 1rem;
    }
    .initial-desktop {
      margin-left: 40%;
      text-align: left;
      max-width: 550px;
      padding-right: 1rem;
    }
    .initial-desktop h1 {
      text-align: left;
    }
    .fullscreen-content h1 {
      text-align: left;
    }
  }
</style>
