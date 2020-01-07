const cuisines = [
	{
		id: 1,
		name: "ukrainian",
		description: "Laborum dolor incididunt cupidatat amet non anim.",
		image:
			"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"
	},
	{
		id: 2,
		name: "chinese",
		description: "Laborum dolor incididunt cupidatat amet non anim.",
		image:
			"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"
	},
	{
		id: 3,
		name: "italian",
		description: "Laborum dolor incididunt cupidatat amet non anim.",
		image:
			"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"
	},
	{
		id: 4,
		name: "greek",
		description: "Laborum dolor incididunt cupidatat amet non anim.",
		image:
			"iVBORw0KGgoAAAANSUhEUgAAAZAAAACWCAYAAADwkd5lAAAO1klEQVR4Xu2bv2sVSxTHJyAxgRSaCJLGwkL9AxQEtbHxT1DwR2OhoAiCICjiL1QEQRERLdRCLWxsbBTESsHCRkhjY6eCkERBiBEh783m7X3r9SazOzuzc2bmcyHwfDt75sznnJ3vnLP3Dk1NTS38+vVLjY6OFn/Dw8OKDwQgAAEIQKCfgNaKubm54k9rxdDnz58XJiYm1MzMTPGnP+Pj48UfYkICQQACEMibgBaNQfowPT29KCCTk5M9Qj9+/OgNHhsbK4Rk9erVamhoKG+KrB4CEIBAJgQWFhbU7OxsoQVaE8qiQmtC+fny5cvfAlJerGMgE5YsEwIQgEAWBJoUEMsKSJXWUiUMLa4scopFQgACCROw3d9rC0iVXROFSpg5S4MABCAQLQEXHSYrAaHFFW3O4DgEIJA5AZcFQCsBocWVeSayfAhAIAoCti0q0+KcCQgtLhNqrkMAAhDojoCLFpXJWy8CQovLhJ3rEIAABPwQcNmiMnnoVUBocZnwcx0CEIBAewK+WlQmzzoTEFpcplBwHQIQgEB9Al20qEzeBBEQWlymsHAdAhCAwGACXbaoTDEIKiC0uEzh4ToEIAABpUK1qEzsxQgILS5TqLgOAQjkREBCi8rEW6SA0OIyhY3rEIBAqgQktahMjEULCC0uU/i4DgEIpEBAaovKxDYaAaHFZQol1yEAgZgIxNCiMvGMUkBocZnCynUIQEAqgZhaVCaGUQsILS5TeLkOAQhIIBBri8rELhkBocVlCjXXIQCBLgmk0KIy8UpSQGhxmcLOdQhAwBeBlFpUJkZJCwgtLlP4uQ4BCLggkGqLysQmGwGhxWVKBa5DAAJNCOTQojLxyFJAaHGZ0oLrEIDAUgRyalGZsiBrAaHFZUoPrkMAAppAri0qU/QRkAGEOGGY0obrEEifAC0qc4wRkGUYkUDmBGIEBFIjwAGyfkQRkJqsKGFrgmIYBCIkwPNtFzQExIIbJxQLaNwCAWEE6DC0DwgC0oIhCdgCHrdCIBABDoDuwCMgjlhSAjsCiRkIeCDA8+kB6r8mERAPXDnheICKSQg0JECHoCEwi+EIiAW0ureQwHVJMQ4C7ghwgHPH0mQJATERcnSdEtoRSMxAYAABnq8waYGABODOCSkAdKZMjgAVfviQIiABY8ADEBA+U0dLgAOYnNAhIEJiQQkuJBC4IZIAz4fIsPAtLIlh4YQlMSr41DUBKvSuiTefjwqkObPO7uAB6gw1EwkiwAFKUDAMriAgkcSKEj6SQOGmFQHy2wpb8JsQkOAhaO4AJ7TmzLhDHgEqbHkxaeoRAtKUmKDxPICCgoErtQlwAKqNSvxABER8iOo5SAugHidGhSFAfobh7ntWBMQ34QD2OeEFgM6UfxGgQk4/KRCQhGPMA5xwcAUvjQOM4OA4dg0BcQxUqjlaCFIjk4Zf5FcacWy6CgSkKbEExnNCTCCIApZAhSsgCIFdQEACByDk9GwAIenHOzcHkHhj59pzBMQ10Ujt0YKINHAduU1+dAQ6smkQkMgC1oW7nDC7oCx/DipU+TEK7SECEjoCgudnAxEcHI+ucYDwCDcx0whIYgH1tRxaGL7IyrBLfGXEITYvEJDYIibAX06oAoLgwAUqTAcQMzeBgGSeAG2WzwbUhl64ezkAhGOf2swISGoRDbQeWiCBwNeclvjUBMWwRgQQkEa4GFyHACfcOpT8j6FC9M849xkQkNwzwOP62cA8wl3GNAIehnuOsyIgOUY9wJppofiFDl+/fLE+mAACQmZ0ToATshvkVHhuOGLFngACYs+OO1sSYAO0A4gA23HjLvcEEBD3TLFoQYAWzPLQ4GORVNzinQAC4h0xEzQlwAl7kRgVWtPMYXzXBBCQrokzX20CuW6gCGjtFGFgYAIISOAAMH09Aqm3cFJfX70oMyo2AghIbBHDX5XKCT3XCosUTocAApJOLLNbSawbcCoCmF3CseC/CCAgJEUSBKS3gKT7l0QSsIjOCSAgnSNnQt8EpJzwY62QfMcH++kQQEDSiSUr6SMQagOXImAkBAR8E0BAfBPGvggCvltIvu2LgIgTEOgjgICQEtkRcFUhhKpwsgsYCxZLAAERGxoc803AVgBcCZDv9WEfAr4JICC+CWM/CgKmFpTpehSLxEkIOCaAgDgGirn4CZQVxvT0tBoZGSkWND8/r8bHx4u/sbGx+BfJCiDggAAC4gAiJtIiUG1RrVy5sljcz58/1cTEBAKSVqhZTUsCCEhLgNyeBgFTi8p0PQ0KrAICzQggIM14MTohArxETyiYLCUIAQQkCHYmDUnA1beobAUo5NqZGwIuCSAgLmliSywB3y0o3/bFgsWxrAkgIFmHP+3Fh6oQXFU4aUeH1aVAAAFJIYqs4Q8CUjbwUAJGOkCgKwIISFekmccrAektJOn+eQ0OxpMlgIAkG9r0FxbrCV9KhZR+hrBC3wQQEN+Ese+cQCobcKwC6DygGIyWAAISbejycjz1FlDq68srW/NZLQKST6yjW2muJ/RUKqzoEg6HGxNAQBoj4wbfBNhAFwnnKqC+8wv77gggIO5YYqkFAVo4y8ODT4vk4lZvBBAQb2gxbCLACdtEaPB1KjQ7btzlngAC4p4pFg0E2ADdpAgC7IYjVuwJICD27LizAQFaMA1gWQyFrwU0bmlNAAFpjRADSxHghBwmN6jwwnDPcVYEJMeoe14zG5hnwDXNI+A1QTHMmgACYo2OG6sEaKHIzgfiIzs+sXqHgMQaOQF+c8IVEAQLF6gQLaBxy0ACCAiJ0ZgAG1BjZCJv4AAgMixROYWARBWucM7SAgnHvouZiW8XlNObAwFJL6bOVsQJ1RnKqAxRYUYVrqDOIiBB8cucnA1EZly69ooDRNfE45sPAYkvZl48poXhBWsyRsmPZELpdCEIiFOccRnjhBlXvKR4S4UqJRLh/UBAwsegcw/YADpHnuSEHECSDGujRSEgjXDFO5gWRLyxi8Fz8iuGKLn3EQFxz1SMRU6IYkKRlSNUuPmEGwFJMNY8wAkGNcIlcYCJMGgNXUZAGgKTOpwWgtTI4JcmQH6mmQcISMRx5YQXcfAydp0KOZ3gIyARxpIHMMKg4fJfBDgAxZ8UCEgkMaQFEEmgcNOKAPlthS34TQhI8BAs7QAnNMHBwTVvBKiwvaF1bhgBcY60vUEeoPYMsRA/AQ5Q8mOIgAiJESW8kEDghkgCPB8iw6IQkIBx4YQVED5TR0uACl1O6BCQALHgAQgAnSmTI8ABLHxIEZCOYkAJ3hFopsmSAM9XmLAjIB65c0LyCBfTEFiCABV+d6mBgHhgTQJ7gIpJCDQkwAGuITCL4QiIBbRBt1BCOwKJGQh4IMDz6QHqvyYRkBZcOeG0gMetEAhEgA6BO/AIiAVLEtACGrdAQBgBDoDtA4KA1GRICVwTFMMgECEBnm+7oCEgy3DjhGKXVNwFgZgJ0GGoHz0EZAArEqh+AjESAqkS4ABpjiwC8h8jSlhzsjACArkSYH8YHPmsBYQTRq7bAeuGgD0BOhT/s8tSQEgA+4eHOyEAgUUCHEAz+h0IJSiPPQQg4ItArvtL0hUIJwRfjwt2IQCBpQjk1OFIUkByCiCPMQQgIJNADgfYZAQk1xJS5qODVxCAQJVAqvtT1AKSg8LzGEIAAmkRSKlDEqWApBSAtB4NVgMBCNQlkMIBOBoBSbUErJtsjIMABNIlEOv+JlpAUlDodFOelUEAAj4IxNRhESkgMQH0kUDYhAAEIBDDAVqMgMRawpHmEIAABHwTkLo/BhWQGBTWd2JgHwIQgEATApI6NEEERBKAJoFjLAQgAAHXBC5evKjWr1+v9u7dW5ienp4u/vvFixfFvw8dOqSuX7+uRkdH1dzcnDp+/Li6e/ducW3nzp3q6tWrasWKFWp8fLz4GxsbW9JFff/Zs2fVwYMH1caNG4tx/Tb1/7tw4YI6c+ZMcf3x48dq3759PZuvX79W27ZtK/7dmYBILcFcJwP2IAABCNQl8ObNG7V9+3b16NGjnoDoDfvjx4/FBl5u7jt27Ciu6/EPHz7sCYoWH/05efKkmpmZKf70pxST4eHhniulrbdv36onT570BEQL1unTp9WlS5fUxMTEH67ra0ePHlXnzp0rxuv59ZzaRz3Wq4DQoqqbRoyDAARyI1BWA+/fv1cHDhwoBKLc5Pfv39875etN+9WrV4Wg9FcrHz58UPfu3VPnz58vKhT9GdTh+fr1q9qzZ4/aunWr+v79e08Q9PhBNspY9AtWfwXjRUBoUeX2KLBeCECgKQF9itcfXW2ULaz+E7++Xm7ily9fVqdOnVJVcdGbv64Orl27VoiL/pTtLl3VPHjwoGhxaburVq1Sk5OTRbVSVhSl/VKg+tdQrYb0tX6BcyYgtKiapg/jIQCBXAlU20a3b99eVkD6RaIqIFXBWbduXfF+RLe7Nm/erI4dO6Zu3rxZtJ7K/VmLlW5VaSHasmWL0i0uLRLPnj0r2lr6s2vXrl6Lql9A9PVqFdRKQGhR5Zr+rBsCEGhDQG/C+gW4fhld3ZAHVSB1BUQLhR67e/dupdti1fcqpa/a/uHDh9WRI0eKikS/cL9//37x7qSsXKotradPn/bex5Q2WgsILao2qcO9EIBAzgT63zmYBKROC+vWrVu9F+Da3qdPn3qCUGVdFagNGzao2dnZQjz0nl6+eJ+fn++9OH/37t0fAmLdwqJFlXPKs3YIQMAVgf6vxZZ29VdnT5w4UbShbF+ia7HR1cXatWt7L+aXEpDya7z6enV///btm7pz507x7kS3vKrf+mr0Ep0WlauUwQ4EIACBwQT6v1ll8zVe/Q2t8vcj+r/XrFnzxzuQagur+rXc/q8J63EvX75Uz58/L3778fv3b3XlypXivcmmTZvqfY2XFhWpDgEIQKAbAoO+mlu+x9AeVH9I2P8jw/KFtx6nvwas36lUfwCoq4fyNxt6zKB3LP0/JCznGxkZKVpc2r8bN270YAz8IaH+UYjphyjd4GQWCEAAAhCQRGCpVxhakIampqYW9AD9QxT9V/31oqRF4AsEIAABCIQloLVCVy36T2vFP52mbODIgOATAAAAAElFTkSuQmCC"
	}
];
module.exports = cuisines;
