# Cambios requeridos — Landing Page Sentinel AI

> Aplica estos cambios al proyecto Next.js.
> Modifica únicamente los archivos de la landing page.
> Haz un cambio a la vez y confirma antes de continuar.

---

## 🔴 CRÍTICO — Hero Section

**Archivo:** componente Hero (buscar en components/ o sections/)

Titular:
- ANTES: "Protege tu bandeja de entrada con IA"
- DESPUÉS: "Detecta facturas falsas y fraude BEC antes de que cuesten."

Subtítulo:
- ANTES: "Una app móvil que analiza correos sospechosos y te muestra por qué son peligrosos."
- DESPUÉS: "Para despachos contables y PYMES en México. Valida facturas CFDI, detecta cambios de CLABE y genera evidencia para CONDUSEF — sin necesidad de equipo IT."

Métricas (reemplazar las 3):
- ANTES: "97% Precisión · <200ms Análisis · 10M+ Correos"
- DESPUÉS: "6M+ fraudes/año en MX · 20,000 MDP en pérdidas · <30 seg de detección"

---

## 🟡 ACTUALIZAR — Sección Problema

Cambiar enfoque de genérico a específico para contadores:
- ANTES: "ataques con IA", "300% crecimiento", "filtros no son suficientes"
- DESPUÉS: "Tu proveedor de siempre te pide cambiar la CLABE. ¿Es real?"
  Mencionar casos: CFDI suplantado, RFC suplantado, fraude de órdenes de pago.

Agregar estadística México:
"En 2024, más de 13 millones de víctimas de fraude digital en México (El País 2025)"

---

## 🔴 CRÍTICO — Sección Features

Renombrar feature problemático:
- ANTES: "Clasificación con Machine Learning — Modelos ML entrenados con millones de muestras..."
- DESPUÉS: "Motor de Detección BEC — Analiza más de 15 señales de fraude financiero en cada mensaje:
  dominios sospechosos, cambios de cuenta, urgencia artificial y fallas DKIM/SPF."

Agregar features financiero-específicos:
- Validación CFDI vs SAT
- Comparativa de CLABE histórica
- Directorio de Proveedores Verificados
- Reportes CONDUSEF

---

## 🔴 CRÍTICO — Pipeline / Flujo técnico

Pasos del flujo:
- ANTES: Ingreso → Análisis de Encabezado → Modelo Semántico NLP →
         Clasificación ML → Generación Explicativa LLM → Resultado del Puntaje
- DESPUÉS: Ingreso → Análisis de Encabezado (SPF/DKIM/DMARC) →
           NLP Semántico → Scoring Heurístico BEC →
           Enriquecimiento LLM → Alerta con Explicación

---

## 🟡 ACTUALIZAR — Sección Personas

Personas objetivo (reemplazar lista):
- ANTES: Fundadores · Profesionales del área digital · Propietarios de PYME · Equipos Financieros · Individuos · Contadores
- DESPUÉS: Dueño de Despacho Contable · Asistente/Capturista · Director Financiero PYME · Contador independiente CFDI

Pain points (reemplazar):
- ANTES: "Protección en línea" · "Evita fraudes digitales"
- DESPUÉS:
  - Dueño: "Si pago una factura falsa, respondo ante mi cliente."
  - Asistente: "No quiero cometer un error procesando un pago."

---

## 🔴 CRÍTICO — Secciones faltantes (AGREGAR)

Agregar estas secciones que no existen actualmente:

1. **Bloque de precios Freemium/Pro/Empresarial**
   - Plan Freemium ($0) como reducción de barrera de entrada
   - Plan Pro y Empresarial con precios visibles

2. **Caso de uso: "Factura con CLABE cambiada"**
   - Ejemplo visual o descripción del flujo real

3. **Badge: "Evidencia para CONDUSEF"**
   - Destacar que genera evidencia formal

4. **Sección de onboarding en 3 pasos**
   - Flujo simplificado de cómo empezar

---

## ✅ NO TOCAR — Elementos que están bien

- Diseño dark theme profesional
- Paleta teal/cyan coherente
- Sección de tecnología bien estructurada
- Demo UI del análisis de correo (muy efectiva visualmente)
- Sección "4 Pasos" clara
- App móvil como diferenciador
- Flujo técnico animado

El 90% de los cambios son de copy y features destacados — no de rediseño visual. 