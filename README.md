

# Airborne-FFT

This project is a sandbox project attempting to bring numerical and scientific computing capabilities to life via the distributional power of the web. 

I am a big fan of the Python-NestJS-Angular stack. It combines the numerical super powers of Python with the distributional power of web which Angular and NestJS caters for.  

This project intendeds to showcase how data science topics can be taken to the web and integrate with modern UIs. 

More specifically we expose the methodologies behind Steven L. Brunton's brilliant series on Fourier transform to web by implementing 
the example covered in this Youtube video: https://www.youtube.com/watch?v=s2K1JfNR7Sc.

Bear in mind, that the Fast Fourier Transform calculations shown in the video is not performed in this project, but on the associated Python server (Flask API). See repo airbone-fft-python for implementation.

This project, however, wraps and exposes the calcutions, in a graphical UI.

Please note, that my focus has been more on the distributional aspects of the architecture and less on the mathematical rigor.

The project is generated using [Nx](https://nx.dev) and consist of two apps:

- [Angular](https://angular.io) Front-end exposing scientic computing results from the associated Python server.

- [Nest](https://nestjs.com) Back-end wrapping the Python server and serving the Angular front-end
  
Elements that to some extend exhibit my style of coding:

#### Reactive Programming
RxJS and no manual subscriptions 

#### S.O.L.I.D
Front-end as SOLID as possible.

#### Angular Specific
- Directives (attribute)
- Dependency Injection
- Performance

#### Typescript Specific
- Native class (Date) extensions
- Type extensions
- OOP

#### NX Specific
- Seperate libraries interface and type
- Continuous migration of components into shared libraries

#### Testing
- Testing is important. Will be added soon...

#### Mathematics and Computing 
- Application and wrapping of transform methods applies to time series 
- More applications and interactivity will be added
- All computations done on the Python server (see repo airbone-fft-python for implementation)

#### Security
Security aspects are important, but not the main focus of this sandbox project.

#### External Tool Applied here

- ApexChart (https://apexcharts.com/angular-chart-demos/) - a very promising charting library
- Moment.js
- Axios


