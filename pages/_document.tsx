import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#4f64aa' />
				<meta name='msapplication-TileColor' content='#4f64aa' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<body>
				<Main />
				<NextScript />
				{/* <script
					dangerouslySetInnerHTML={{
						__html: `
							(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
							m[i].l=1*new Date();
							for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
							k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
							(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

							ym(85975805, "init", {
										clickmap:true,
										trackLinks:true,
										accurateTrackBounce:true,
										webvisor:true
							});
						`,
					}}
				/> */}
				<Script id='yandex-metrika' strategy='afterInteractive'>
					{`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(${process.env.NEXT_PUBLIC_YANDEX}, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true
					});
        `}
				</Script>
				<noscript>
					<div>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX}`}
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>

				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE}`}
					strategy='afterInteractive'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
          window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE}');
        `}
				</Script>
			</body>
		</Html>
	)
}
