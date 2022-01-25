<template>
  <div class="subscription ml-4">
    <button
        id="subscripBtn"
        class="subscription__btn"
        :class="{ active: isActive }"
        @click.stop="isActive = !isActive"
    >Подписка</button>
    <div
        id="subscripContainer"
        class="subscription__list"
        :class="{ active: isActive }"
        v-click-outside="closeModal"
    >
      <div class="subscription__radio">
        <div class="d-flex justify-content-between">
          <div class="subscription__form-radio">
            <input
              id="month-subscription"
              type="radio"
              name="radio"
              value="month"
              @click="radioBtnClick"
              checked
            />
            <label for="month-subscription">Месячная</label>
          </div>

          <div class="subscription__form-radio flex-grow-1">
            <input
              id="year-subscription"
              type="radio"
              name="radio"
              value="year"
              @click="radioBtnClick"
            />
            <label for="year-subscription">Годовая</label>
          </div>

          <div class="subscription__form-radio radio-info">
            <input
              id="info-subscription"
              type="radio"
              name="radio"
              value="info"
              @click="radioBtnClick"
            />
            <label for="info-subscription"></label>
          </div>

        </div>

        <div class="subscription__content">
          <div data-name="month" v-show="!radioBtn">
            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Базовый</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 50 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">1000</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Стандарт</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 120 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">2500</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">
                  Стандарт <span>+</span>
                </h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 280 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">6000</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Премиум</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 650 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">15000</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Энтерпрайз</h3>
                <p class="subscription__card-price--unique">
                  Для компаний где более 800 сотрудников
                </p>
                <p class="subscription__card-price--unique">
                  Токены по этому тарифу устанавливаются индивидуально
                </p>
              </div>
            </div>
          </div>

          <div data-name="year" v-show="radioBtn">
            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Базовый</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 42.5 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">1000</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Стандарт</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 102 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">2500</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">
                  Стандарт <span>+</span>
                </h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 238 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">6000</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Премиум</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 552.5 <span>/ месяц</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">15000</p>
                <p class="subscription__card-token--token">токенов</p>
              </div>
            </div>

            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">Энтерпрайз</h3>
                <p class="subscription__card-price--unique">
                  Для компаний где более 800 сотрудников
                </p>
                <p class="subscription__card-price--unique">
                  Токены по этому тарифу устанавливаются индивидуально
                </p>
              </div>
            </div>
          </div>

          <div data-name="info" v-show="radioBtn">
            <div
              class="
                subscription__card
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <div class="d-flex flex-column subscription__card-price">
                <h3 class="subscription__card-price--title">
                  Выбирайте комфортный тарифный план
                </h3>
                <p class="subscription__card-price--unique">
                  Чтобы наш сервис был доступен каждому, мы разработали ряд
                  тарифных планов с учетом потребностей компаний любого размера:
                  от стартапов или студий до интерпрайз.
                </p>

                <h3 class="subscription__card-price--title">
                  Каждая подписка включает:
                </h3>
                <p class="subscription__card-price--unique unique-list">
                  Открытие контактов кандидата
                </p>
                <p class="subscription__card-price--unique unique-list">
                  Публикация вакансии от имени компании
                </p>

                <h3 class="subscription__card-price--title">
                  Что такое токены?
                </h3>
                <p class="subscription__card-price--unique">
                  Это наша особая валюта которая позволит использовать все
                  уникальные особенности платформы и сделать процесс найма
                  максимально простым и быстрым.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Subscription',
    data:() => ({
        isActive: false,
        radioBtn: false,
    }),
    methods: {
        radioBtnClick() {
            const radioBtn = document.getElementsByName('radio');
            const radioMonth = document.querySelector('[data-name="month"]');
            const radioYear = document.querySelector('[data-name="year"]');
            const radioInfo = document.querySelector('[data-name="info"]');
            
            const monthAttr = radioMonth.getAttribute('data-name');
            const yearAttr = radioYear.getAttribute('data-name');
            const infoAttr = radioInfo.getAttribute('data-name');
        
            for (let i = 0, length = radioBtn.length; i < length; i++) {
                radioBtn[i].onchange = () => {
                    if(monthAttr === radioBtn[i].value) {
                    radioMonth.style.display = 'block';
                    } else {
                    radioMonth.style.display = 'none';
                    }
            
                    if(yearAttr === radioBtn[i].value) {
                    radioYear.style.display = 'block';
                    } else {
                    radioYear.style.display = 'none';
                    }
            
                    if(infoAttr === radioBtn[i].value) {
                    radioInfo.style.display = 'block';
                    } else {
                    radioInfo.style.display = 'none';
                    }
                }
            }
        },
        closeModal() {
          this.isActive = false
        }
    },
}
</script>