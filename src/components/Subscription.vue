<template>
  <div class="subscription ml-4">
    <button
        id="subscripBtn"
        class="subscription__btn"
        :class="{ active: isActive }"
        @click.stop="isActive = !isActive"
    >{{$t('subscriptionBtn')}}</button>
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
            <label for="month-subscription">{{ $t('subscriptionMonth') }}</label>
          </div>

          <div class="subscription__form-radio flex-grow-1">
            <input
              id="year-subscription"
              type="radio"
              name="radio"
              value="year"
              @click="radioBtnClick"
            />
            <label for="year-subscription">{{ $t('subscriptionYear') }}</label>
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionBasic') }}</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 50 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">1000</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionStandart') }}</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 120 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">2500</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                  {{ $t('subscriptionStandart') }} <span>+</span>
                </h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 280 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">6000</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionPremium') }}</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 650 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">15000</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionEnterprise') }}</h3>
                <p class="subscription__card-price--unique">
                  {{ $t('subscriptionCardPriceTextA') }}
                </p>
                <p class="subscription__card-price--unique">
                  {{ $t('subscriptionCardPriceTextB') }}
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionBasic') }}</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 42.5 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">1000</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionStandart') }}</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 102 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">2500</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                  {{ $t('subscriptionStandart') }} <span>+</span>
                </h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 238 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">6000</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionPremium') }}</h3>
                <p class="subscription__card-price--text">
                  <span>$</span> 552.5 <span>/ {{ $t('month') }}</span>
                </p>
              </div>
              <div class="subscription__card-token">
                <p class="subscription__card-token--price">15000</p>
                <p class="subscription__card-token--token">{{ $t('tokens') }}</p>
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
                <h3 class="subscription__card-price--title">{{ $t('subscriptionEnterprise') }}</h3>
                <p class="subscription__card-price--unique">
                  {{ $t('subscriptionCardPriceTextA') }}
                </p>
                <p class="subscription__card-price--unique">
                  {{ $t('subscriptionCardPriceTextB') }}
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
                  {{ $t('subscriptionCardPriceTitleA') }}
                </h3>
                <p class="subscription__card-price--unique">
                  {{ $t('subscriptionCardPriceMoreA') }}
                </p>

                <h3 class="subscription__card-price--title">
                  {{ $t('subscriptionCardPriceTitleB') }}
                </h3>
                <p class="subscription__card-price--unique unique-list">
                  {{ $t('subscriptionCardPriceMoreB_1') }}
                </p>
                <p class="subscription__card-price--unique unique-list">
                  {{ $t('subscriptionCardPriceMoreB_2') }}
                </p>

                <h3 class="subscription__card-price--title">
                  {{ $t('subscriptionCardPriceTitleC') }}
                </h3>
                <p class="subscription__card-price--unique">
                  {{ $t('subscriptionCardPriceMoreC') }}
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