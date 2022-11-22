const advancedSearch = `<div class="offcanvas offcanvas-start" tabindex="-1" id="advancedSearch">
      <div class="offcanvas-header searchHeader d-flex flex-column-reverse">
        <h4 class="align-self-center text-center" id="headerTitle">
          Advanced Search
        </h4>
        <button
          type="button"
          class="btn-close btn-close-white text-reset align-self-end"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body justify-content-between d-flex flex-column">
        <div class="accordion accordion-flush" id="advancedSearchAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="cardTypeHeading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#cardType"
                aria-expanded="false"
                aria-controls="cardType"
              >
                Card type
              </button>
            </h2>
            <div
              id="cardType"
              class="accordion-collapse collapse"
              aria-labelledby="cardTypeHeading"
              data-bs-parent="#advancedSearchAccordion"
            >
              <div class="cardTypeCheckBox accordion-body">
                <div class="form-check">
                  <input
                    class="cardType form-check-input"
                    type="checkbox"
                    value="t:creature "
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Creature
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="cardType form-check-input"
                    type="checkbox"
                    value="t:instant "
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Instant
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="cardType form-check-input"
                    type="checkbox"
                    value="t:enchantment "
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Enchantment
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="cardType form-check-input"
                    type="checkbox"
                    value="t:sorcery "
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Sorcery
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="formatHeading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#format"
                aria-expanded="false"
                aria-controls="format"
              >
                Format
              </button>
            </h2>
            <div
              id="format"
              class="accordion-collapse collapse"
              aria-labelledby="formatHeading"
              data-bs-parent="#advancedSearchAccordion"
            >
              <div class="accordion-body">
                <div class="form-check">
                  <input
                    value=" f:standard"
                    class="formatRadio form-check-input"
                    type="radio"
                    name="format"
                    id="standard"
                    checked
                  />
                  <label class="form-check-label" for="standard">
                    Standard
                  </label>
                </div>
                <div class="form-check">
                  <input
                    value=" f:alchemy"
                    class="formatRadio form-check-input"
                    type="radio"
                    name="format"
                    id="alchemy"
                  />
                  <label class="form-check-label" for="alchemy">
                    Alchemy
                  </label>
                </div>
                <div class="form-check">
                  <input
                    value=" f:modern"
                    class="formatRadio form-check-input"
                    type="radio"
                    name="format"
                    id="modern"
                  />
                  <label class="form-check-label" for="modern"> Modern </label>
                </div>
                <div class="form-check">
                  <input
                    value=" f:historic"
                    class="formatRadio form-check-input"
                    type="radio"
                    name="format"
                    id="historic"
                  />
                  <label class="form-check-label" for="historic">
                    Historic
                  </label>
                </div>
                <div class="form-check">
                  <input
                    value=" f:commander"
                    class="formatRadio form-check-input"
                    type="radio"
                    name="format"
                    id="commander"
                  />
                  <label class="form-check-label" for="commander">
                    Commander
                  </label>
                </div>
                <div class="form-check">
                  <input
                    value=" f:brawl"
                    class="formatRadio form-check-input"
                    type="radio"
                    name="format"
                    id="brawl"
                  />
                  <label class="form-check-label" for="brawl"> Brawl </label>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="colorHeading">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#color"
                aria-expanded="false"
                aria-controls="color"
              >
                Color
              </button>
            </h2>
            <div
              id="color"
              class="accordion-collapse collapse"
              aria-labelledby="colorHeading"
              data-bs-parent="#advancedSearchAccordion"
            >
              <div class="accordion-body">
                <div class="form-check">
                  <input
                    class="colorType form-check-input"
                    type="checkbox"
                    value="b"
                    id="black"
                  />
                  <label class="form-check-label" for="black"> Black </label>
                </div>
                <div class="form-check">
                  <input
                    class="colorType form-check-input"
                    type="checkbox"
                    value="w"
                    id="white"
                  />
                  <label class="form-check-label" for="white"> White </label>
                </div>
                <div class="form-check">
                  <input
                    class="colorType form-check-input"
                    type="checkbox"
                    value="u"
                    id="blue"
                  />
                  <label class="form-check-label" for="blue"> Blue </label>
                </div>
                <div class="form-check">
                  <input
                    class="colorType form-check-input"
                    type="checkbox"
                    value="g"
                    id="green"
                  />
                  <label class="form-check-label" for="green"> Green </label>
                </div>
                <div class="form-check">
                  <input
                    class="colorType form-check-input"
                    type="checkbox"
                    value="r"
                    id="red"
                  />
                  <label class="form-check-label" for="red"> Red </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="advancedSearchBtn w-75 align-self-center btn btn-dark">
          Search
        </button>
      </div>
    </div>`;

document.body.insertAdjacentHTML("afterbegin", advancedSearch);
