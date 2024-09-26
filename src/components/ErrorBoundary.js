import React from 'react';
// Componente ErrorBoundary para capturar errores
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      apm.captureError(error);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Algo salió mal.</h1>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;