<template>
    <footer class="footer">
		<div class="background-figure"></div>
		<div class="container z-index-20">

			<slot name="footer"></slot>

			<div class="footer__bottom d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap flex-column flex-lg-row">
				<div class="footer__inner d-flex flex-column flex-md-row flex-wrap flex-lg-nowrap order-2 order-lg-1 justify-content-center justify-content-lg-between">
					<div class="footer__inner-copy order-4 order-lg-1 ml-lg-0"><p>Copyright 2021</p></div>
					
					<a target="_blank" href="https://old.an.works/terms-of-use.html#privacy-policy" class="footer__inner-policy mb-3 mb-md-2 mb-lg-0 order-1 order-lg-2">{{ $t('footerPolicy') }}</a>
					<a target="_blank" href="https://old.an.works/terms-of-use.html#cookie" class="footer__inner-coockie mb-3 mb-md-2 mb-lg-0 order-2 order-lg-3">{{ $t('footerCoockie') }}</a>
					<a href="#" class="footer__inner-contacts order-3 order-lg-4 mb-md-2 mb-lg-0">{{ $t('footerContact') }}</a>
				</div>
				<ul class="footer__social-list d-flex order-1 order-lg-2 mb-lg-0">
					<li class="footer__social-item"><a target="_blank" href="https://t.me/anworks"></a></li>
					<li class="footer__social-item"><a target="_blank" href="https://www.instagram.com/an.works.ukraine/"></a></li>
					<li class="footer__social-item"><a target="_blank" href="https://www.facebook.com/an.works.ukraine/"></a></li>
					<li class="footer__social-item"><a target="_blank" href="https://www.linkedin.com/company/anworks/about/"></a></li>
				</ul>
				
			</div>
		</div>
	</footer>
</template>